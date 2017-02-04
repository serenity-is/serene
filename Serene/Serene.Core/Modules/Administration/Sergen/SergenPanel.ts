declare var Vue;

namespace Serene.Administration {
    export class SergenPanel extends Serenity.Widget<any> {

        constructor(container: JQuery) {
            super(container);

            var vm = new Vue({
                el: this.element.children[0],
                data: {
                    connection: "",
                    connections: [],
                    tables: []
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