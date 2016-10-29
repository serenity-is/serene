namespace Serene
{
    using Serenity;
    using Serenity.Abstractions;
    using StackExchange.Exceptional;
    using System;
    using System.Web;

    public static partial class SiteInitialization
    {
        private static void InitializeExceptionLog()
        {
            ErrorStore.Setup("Serene", new SqlErrorStore(null, "Default"));

            ErrorStore.GetCustomData = (exception, context, data) =>
            {
                foreach (var key in exception.Data.Keys)
                {
                    var s = key as string;
                    if (s != null && s.StartsWith("log:", StringComparison.OrdinalIgnoreCase))
                    {
                        string v;
                        var value = exception.Data[key];
                        if (value == null)
                            v = "[null]";
                        else
                            v = value.ToString();

                        data.Add(s.Substring(4), v);
                    }
                }
            };

            ErrorStore.OnBeforeLog += (sender, args) =>
            {
                if (args.Error.Exception != null && args.Error is INotLoggedException)
                    args.Abort = true;
            };

            Dependency.Resolve<IDependencyRegistrar>().RegisterInstance<IExceptionLogger>(new ErrorStoreLogger());
        }

        private class ErrorStoreLogger : IExceptionLogger
        {
            public void Log(Exception exception)
            {
                ErrorStore.LogException(exception, HttpContext.Current);
            }
        }
    }
}