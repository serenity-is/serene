/* 
This class has been ported to TypeScript. See OrderGrid.ts
Code below is only a reference for those who want to use Saltaralle

namespace Serene
{
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Html;
    using System.Linq;
    using System.Runtime.CompilerServices;

    public abstract class BulkServiceAction : ScriptContext
    {
        protected List<string> keys;
        protected IEnumerator<string> queue;
        protected BasicProgressDialog progressDialog;
        protected int pendingRequests;
        protected int completedRequests;
        private int successCount;
        private int errorCount;
        protected Dictionary<string, ServiceError> errorByKey;

        protected virtual void CreateProgressDialog()
        {
            progressDialog = new BasicProgressDialog();
            progressDialog.DialogOpen();
            progressDialog.Max = keys.Count();
            progressDialog.Value = 0;
        }

        protected virtual string GetConfirmationFormat()
        {
            return Q.Text("Site.BulkServiceAction.ConfirmationFormat");
        }

        protected virtual string GetConfirmationMessage(int targetCount)
        {
            return String.Format(GetConfirmationFormat(), targetCount);
        }

        protected virtual void Confirm(int targetCount, Action action)
        {
            Q.Confirm(GetConfirmationMessage(targetCount), action);
        }

        protected virtual string GetNothingToProcessMessage()
        {
            return Q.Text("Site.BulkServiceAction.NothingToProcess");
        }

        protected virtual void NothingToProcess()
        {
            Q.NotifyError(GetNothingToProcessMessage());
        }

        protected virtual int GetParallelRequests()
        {
            return 1;
        }

        protected virtual int GetBatchSize()
        {
            return 1;
        }

        protected virtual void StartParallelExecution()
        {
            CreateProgressDialog();

            this.pendingRequests = 0;
            this.completedRequests = 0;
            this.errorCount = 0;
            this.errorByKey = new Dictionary<string, ServiceError>();
            this.queue = keys.GetEnumerator();

            int parallelRequests = GetParallelRequests();
            while (parallelRequests-- > 0)
                ExecuteNextBatch();
        }

        protected virtual void ServiceCallCleanup()
        {
            pendingRequests--;
            completedRequests++;

            string title = Q.Text(progressDialog.Cancelled ?
                "Site.BasicProgressDialog.CancelTitle" :
                "Site.BasicProgressDialog.PleaseWait");

            title += " (";

            if (successCount > 0)
                title += String.Format(Q.Text("Site.BulkServiceAction.SuccessCount"), successCount);

            if (errorCount > 0)
            {
                if (successCount > 0)
                    title += ", ";

                title += String.Format(Q.Text("Site.BulkServiceAction.ErrorCount"), errorCount);
            }

            progressDialog.Title = title + ")";
            progressDialog.Value = successCount + errorCount;

            if (!progressDialog.Cancelled && progressDialog.Value < keys.Count)
                ExecuteNextBatch();
            else if (pendingRequests == 0)
            {
                progressDialog.DialogClose();
                ShowResults();
                if (Done != null)
                {
                    Done();
                    Done = null;
                }
            }
        }

        protected virtual void ExecuteForBatch(List<string> batch)
        {
        }

        protected virtual void ExecuteNextBatch()
        {
            var batchSize = GetBatchSize();
            var batch = new List<string>();
            while (true)
            {
                if (batch.Count >= batchSize)
                    break;

                if (!queue.MoveNext())
                    break;

                batch.Add(queue.Current);
            }

            if (batch.Count > 0)
            {
                pendingRequests++;
                ExecuteForBatch(batch);
            }
        }

        protected virtual string GetAllHadErrorsFormat()
        {
            return Q.Text("Site.BulkServiceAction.AllHadErrorsFormat");
        }

        protected virtual void ShowAllHadErrors()
        {
            Q.NotifyError(String.Format(GetAllHadErrorsFormat(), errorCount));
        }

        protected virtual string GetSomeHadErrorsFormat()
        {
            return Q.Text("Site.BulkServiceAction.SomeHadErrorsFormat");
        }

        protected virtual void ShowSomeHadErrors()
        {
            Q.NotifyWarning(String.Format(GetSomeHadErrorsFormat(), successCount, errorCount));
        }

        protected virtual string GetAllSuccessFormat()
        {
            return Q.Text("Site.BulkServiceAction.AllSuccessFormat");
        }

        protected virtual void ShowAllSuccess()
        {
            Q.NotifySuccess(String.Format(GetAllSuccessFormat(), successCount));
        }

        protected virtual void ShowResults()
        {
            if (errorCount == 0 &&
                successCount == 0)
            {
                NothingToProcess();
                return;
            }

            if (errorCount > 0 &&
                successCount == 0)
            {
                ShowAllHadErrors();
                return;
            }

            if (errorCount > 0)
            {
                ShowSomeHadErrors();
                return;
            }

            ShowAllSuccess();
        }

        public virtual void Execute(List<string> keys)
        {
            this.keys = keys;

            if (this.keys.Count == 0)
            {
                NothingToProcess();
                return;
            }

            Confirm(this.keys.Count, () =>
            {
                StartParallelExecution();
            });
        }

        protected int SuccessCount
        {
            get { return successCount; }
            set { successCount = value; }
        }

        protected int ErrorCount
        {
            get { return errorCount; }
            set { errorCount = value; }
        }

        public Action Done;
    }
}
*/