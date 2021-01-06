using MimeKit;
using System;

namespace Serene.Common
{
    public static class EmailSenderExtensions
    {
        public static void Send(this IEmailSender emailSender, string subject, string body, string mailTo)
        {
            var message = new MimeMessage();
            if (mailTo == null)
                throw new ArgumentNullException(nameof(mailTo));
            message.To.Add(MailboxAddress.Parse(mailTo));
            message.Subject = subject;
            var bodyBuilder = new BodyBuilder
            {
                HtmlBody = body
            };
            message.Body = bodyBuilder.ToMessageBody();
            emailSender.Send(message);
        }
    }
}