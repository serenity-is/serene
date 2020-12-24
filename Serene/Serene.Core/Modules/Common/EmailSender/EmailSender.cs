using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Options;
using MimeKit;
using Serenity.Abstractions;
using Serenity.Data;
using System;
using System.IO;

namespace Serene.Common
{
    public class EmailSender : IEmailSender
    {
        private IWebHostEnvironment host;
        private SmtpSettings smtp;
        private ISqlConnections connections;
        private IUserAccessor userAccessor;

        public EmailSender(IWebHostEnvironment host, IOptions<SmtpSettings> smtp,
            ISqlConnections connections, IUserAccessor userAccessor)
        {
            this.host = (host ?? throw new ArgumentNullException(nameof(host)));
            this.smtp = (smtp ?? throw new ArgumentNullException(nameof(smtp))).Value;
            this.connections = connections ?? throw new ArgumentNullException(nameof(connections));
            this.userAccessor = userAccessor ?? throw new ArgumentNullException(nameof(userAccessor));
        }

        public void Send(MimeMessage message, bool skipQueue)
        {
            if (message == null)
                throw new ArgumentNullException(nameof(message));

            if (message.From.Count == 0 && !string.IsNullOrEmpty(smtp.From))
                message.From.Add(MailboxAddress.Parse(smtp.From));

            if (!string.IsNullOrEmpty(smtp.Host))
            {
                using var client = new SmtpClient();
                client.Connect(smtp.Host, smtp.Port, smtp.UseSsl);
                client.Send(message);
                client.Disconnect(true);
            }
            else
            {
                var pickupPath = string.IsNullOrEmpty(smtp.PickupPath) ?
                    Path.Combine(host.ContentRootPath, "App_Data", "Mail") : 
                    Path.Combine(host.ContentRootPath, smtp.PickupPath);
                if (!Directory.Exists(pickupPath))
                    Directory.CreateDirectory(pickupPath);
                message.WriteTo(Path.Combine(pickupPath, DateTime.Now.ToString("yyyyMMdd_HHmmss_fff") + ".eml"));
            }
        }
    }
}