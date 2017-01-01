namespace Serene.Common {

    export class BulkServiceAction {

        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        public done: () => void;

        protected createProgressDialog() {
            this.progressDialog = new BasicProgressDialog();
            this.progressDialog.dialogOpen();
            this.progressDialog.max = this.keys.length;
            this.progressDialog.value = 0;
        }

        protected getConfirmationFormat() {
            return Q.text('Site.BulkServiceAction.ConfirmationFormat');
        }

        protected getConfirmationMessage(targetCount) {
            return Q.format(this.getConfirmationFormat(), targetCount);
        }

        protected confirm(targetCount, action) {
            Q.confirm(this.getConfirmationMessage(targetCount), action);
        }

        protected getNothingToProcessMessage() {
            return Q.text('Site.BulkServiceAction.NothingToProcess');
        }

        protected nothingToProcess() {
            Q.notifyError(this.getNothingToProcessMessage());
        }

        protected getParallelRequests() {
            return 1;
        }

        protected getBatchSize() {
            return 1;
        }

        protected startParallelExecution() {
            this.createProgressDialog();
            this.successCount = 0;
            this.errorCount = 0;
            this.pendingRequests = 0;
            this.completedRequests = 0;
            this.errorCount = 0;
            this.errorByKey = {};
            this.queue = this.keys.slice();
            this.queueIndex = 0;
            var parallelRequests = this.getParallelRequests();
            while (parallelRequests-- > 0) {
                this.executeNextBatch();
            }
        }

        protected serviceCallCleanup() {
            this.pendingRequests--;
            this.completedRequests++;

            var title = Q.text((this.progressDialog.cancelled ?
                'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));

            title += ' (';
            if (this.successCount > 0) {
                title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
            }

            if (this.errorCount > 0) {
                if (this.successCount > 0) {
                    title += ', ';
                }

                title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
            }

            this.progressDialog.title = title + ')';
            this.progressDialog.value = this.successCount + this.errorCount;
            if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                this.executeNextBatch();
            }

            else if (this.pendingRequests === 0) {
                this.progressDialog.dialogClose();
                this.showResults();
                if (this.done) {
                    this.done();
                    this.done = null;
                }
            }
        }

        protected executeForBatch(batch: string[]) {
        }

        protected executeNextBatch() {
            var batchSize = this.getBatchSize();
            var batch = [];
            while (true) {
                if (batch.length >= batchSize) {
                    break;
                }

                if (this.queueIndex >= this.queue.length) {
                    break;
                }

                batch.push(this.queue[this.queueIndex++]);
            }

            if (batch.length > 0) {
                this.pendingRequests++;
                this.executeForBatch(batch);
            }
        }

        protected getAllHadErrorsFormat() {
            return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
        }

        protected showAllHadErrors() {
            Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
        }

        protected getSomeHadErrorsFormat() {
            return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
        }

        protected showSomeHadErrors() {
            Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
        }

        protected getAllSuccessFormat() {
            return Q.text('Site.BulkServiceAction.AllSuccessFormat');
        }

        protected showAllSuccess() {
            Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
        }

        protected showResults() {
            if (this.errorCount === 0 && this.successCount === 0) {
                this.nothingToProcess();
                return;
            }

            if (this.errorCount > 0 && this.successCount === 0) {
                this.showAllHadErrors();
                return;
            }

            if (this.errorCount > 0) {
                this.showSomeHadErrors();
                return;
            }

            this.showAllSuccess();
        }

        public execute(keys: string[]) {
            this.keys = keys;
            if (this.keys.length === 0) {
                this.nothingToProcess();
                return;
            }
            this.confirm(this.keys.length, () => this.startParallelExecution());
        }

        get_successCount() {
            return this.successCount;
        }

        set_successCount(value: number) {
            this.successCount = value;
        }

        get_errorCount() {
            return this.errorCount;
        }

        set_errorCount(value: number) {
            this.errorCount = value;
        }
    }
}