using System.Web.Hosting;
using System.IO;
using Serenity.ComponentModel;
using Serenity;
using Microsoft.AspNetCore.Hosting;
using System;
#if COREFX
using MailKit.Net.Smtp;
using MimeKit;
using MailKit.Security;
#else
using System.Net.Mail;
#endif

namespace Serene.Common
{

    [SettingScope("Application"), SettingKey("MailSettings")]
    public class MailSettings
    {
        public string Host { get; set; }
        public int Port { get; set; }
        public bool UseSsl { get; set; }
    }

    public class EmailHelper
    {
        public static void Send(string subject, string body, string address, string displayName = "")
        {
#if COREFX
            var message = new MimeMessage();
            message.To.Add(new MailboxAddress(displayName, address));
            message.Subject = subject;
            var bodyBuilder = new BodyBuilder();
            bodyBuilder.HtmlBody = body;
            message.Body = bodyBuilder.ToMessageBody();
            var config = Config.Get<MailSettings>();
            if (!string.IsNullOrEmpty(config.Host))
            {
                var client = new SmtpClient();
                client.Connect(config.Host, config.Port, config.UseSsl);
                client.Send(message);
                client.Disconnect(true);
            }
            else
            {
                var pickupPath = Path.Combine(Dependency.Resolve<IHostingEnvironment>().ContentRootPath, "App_Data");
                pickupPath = Path.Combine(pickupPath, "Mail");
                Directory.CreateDirectory(pickupPath);
                message.WriteTo(Path.Combine(pickupPath, DateTime.Now.ToString("yyyyMMdd_HHmmss_fff") + ".eml"));
            }
#else
            var message = new MailMessage();
            message.To.Add(new MailAddress(address, ""));
            message.Subject = subject;
            message.Body = body;
            message.IsBodyHtml = true;

            var client = new SmtpClient();

            if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
                string.IsNullOrEmpty(client.PickupDirectoryLocation))
            {
                var pickupPath = HostingEnvironment.MapPath("~/App_Data");
                pickupPath = Path.Combine(pickupPath, "Mail");
                Directory.CreateDirectory(pickupPath);
                client.PickupDirectoryLocation = pickupPath;
            }

            client.Send(message);
#endif
        }
    }
}