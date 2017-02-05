declare var Vue;

namespace Serene.Administration {
    export class SergenPanel extends Serenity.Widget<any> {

        constructor(container: JQuery) {
            super(container);

            var vm = new Vue({
                el: $('<div/>').appendTo(this.element)[0],
                data: {
                    connection: "",
                    connections: [],
                    tables: [],
                    generate: {
                        Row: true,
                        Service: true,
                        UI: true
                    }
                },
                methods: {
                    generateCode: function (table) {
                        if (!table.Identifier) {
                            Q.notifyError("Identifier cannot be empty!");
                            return;
                        }

                        if (!table.Module) {
                            Q.notifyError("Module cannot be empty!");
                            return;
                        }

                        SergenService.Generate({
                            ConnectionKey: this.connection,
                            Table: table,
                            GenerateOptions: this.generate
                        }, r => {
                            Q.notifySuccess("Code for selected table is generated. You'll need to rebuild your project.");
                        });
                    }
                },
                watch: {
                    connection: function (val) {
                        if (!val || !val.length)
                            vm.tables = [];
                        else
                            SergenService.ListTables({
                                ConnectionKey: val
                            }, response => vm.tables = response.Entities)
                    }
                },
                template: Q.getTemplate('Administration.SergenPanel')
            });

            SergenService.ListConnections({}, response => vm.connections = response.Entities);
        }
    }
}