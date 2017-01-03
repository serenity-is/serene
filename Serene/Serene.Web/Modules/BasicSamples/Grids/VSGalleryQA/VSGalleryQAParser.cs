namespace Serene.BasicSamples
{
    using CsQuery;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Linq;
    using System.Net;

    public class VSGalleryQAParser
    {
        // this is URL format for Serenity discussions
        private const string DiscussionsUrl = "https://visualstudiogallery.msdn.microsoft.com/" +
            "559ec6fc-feef-4077-b6d5-5a99408a6681/view/Discussions/{0}";

        public List<VSGalleryQAThread> ParsePage(int page)
        {
            // load a page html from vs gallery
            var html = new WebClient().DownloadString(string.Format(DiscussionsUrl, page));

            if (string.IsNullOrWhiteSpace(html))
                return new List<BasicSamples.VSGalleryQAThread>();

            var document = CsQuery.CQ.CreateDocument(html);
            var result = new List<VSGalleryQAThread>();

            foreach (var element in document.Select("li.thread"))
            {
                var thread = TryParseThread(element.Cq());
                if (thread != null)
                    result.Add(thread);
            }

            return result;
        }

        private VSGalleryQAThread TryParseThread(CQ element)
        {
            int threadId;
            if (!int.TryParse(element.Attr("threadid"), out threadId))
                return null;

            var thread = new VSGalleryQAThread();
            thread.ThreadId = threadId;

            thread.Title = element.Children("div.threadHeader")
                .Children("div.title").First().Text();

            thread.Posts = new List<VSGalleryQAPost>();

            foreach (var p in element.Find("li.post"))
            {
                var post = TryParsePost(p.Cq());
                if (post != null)
                    thread.Posts.Add(post);
            }

            if (thread.Posts.Count == 0)
                return null;

            var firstPost = thread.Posts.First();
            thread.StartedByName = firstPost.PostedByName;
            thread.StartedByUserId = firstPost.PostedByUserId;
            thread.StartedOn = firstPost.PostedOn;
            thread.LastPostOn = thread.Posts.Last().PostedOn;

            return thread;
        }

        private VSGalleryQAPost TryParsePost(CQ element)
        {
            int postId;
            if (!int.TryParse(element.Attr("postid"), out postId))
                return null;

            var postDate = element.Find(".postMeta").Text()
                .Split(new char[] { '\r', '\n' }, StringSplitOptions.RemoveEmptyEntries)
                .LastOrDefault(x => !string.IsNullOrWhiteSpace(x))
                .TrimToEmpty();

            DateTime? date = ParseRelativeDate(postDate);
            if (date == null)
                return null;

            var card = element.Find(".discussion").Find(".unified-baseball-card-compact-hover");
            if (card.Length != 1)
                return null;

            var post = new VSGalleryQAPost();
            post.PostId = postId;
            post.PostedOn = date.Value;
            post.PostedByName = card[0].ChildNodes[0].NodeValue;
            post.PostedByUserId = card.Attr("data-profile-userid");
            post.Message = element.Find("pre.postItem").Text();

            return post;
        }

        private DateTime? ParseRelativeDate(string rel)
        {
            rel = rel.TrimToNull();

            if (rel == null)
                return null;

            if (rel.StartsWith("at "))
            {
                rel = rel.Substring(3).TrimToNull();
                if (rel == null)
                    return null;

                DateTime d;
                if (!DateTime.TryParseExact(rel, "h:mm tt", CultureInfo.InvariantCulture, DateTimeStyles.None, out d))
                    return null;

                return d;
            }
            else if (rel.EndsWith(" PM") || rel.EndsWith(" AM"))
            {
                var today = (int)DateTime.Now.DayOfWeek;

                int day = 0;
                switch (rel.SafeSubstring(0, 3))
                {
                    case "Sun":
                        day = 0;
                        break;
                    case "Mon":
                        day = 1;
                        break;
                    case "Tue":
                        day = 2;
                        break;
                    case "Wed":
                        day = 3;
                        break;
                    case "Thu":
                        day = 4;
                        break;
                    case "Fri":
                        day = 5;
                        break;
                    case "Sat":
                        day = 6;
                        break;
                    default:
                        return null;
                }

                DateTime date;
                if (day < today)
                    date = DateTime.Today.AddDays(day - today);
                else
                    date = DateTime.Today.AddDays(-7 + day - today);

                rel = rel.Substring(3).TrimToEmpty();
                DateTime t;
                if (!DateTime.TryParseExact(rel, "h:mm tt", CultureInfo.InvariantCulture, DateTimeStyles.None, out t))
                    return null;

                return date.Add(t.TimeOfDay);
            }
            else
            {
                DateTime d;
                if (!DateTime.TryParseExact(rel, "MMMM d, yyyy", CultureInfo.InvariantCulture, DateTimeStyles.None, out d))
                    return null;

                return d;
            }
        }
    }
}