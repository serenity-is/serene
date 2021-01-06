namespace Serene.Northwind {

    @Serenity.Decorators.registerFormatter()
    export class EmployeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = EmployeeRow.getLookup().itemById;
            let z: EmployeeRow;
            return idList.map(x => ((z = byId[x]) ? z.FullName : x)).join(", ");
        }
    }
}