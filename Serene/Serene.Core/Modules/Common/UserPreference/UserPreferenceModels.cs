
using Serenity.Services;

namespace Serene.Common
{
    public class UserPreferenceUpdateRequest : ServiceRequest
    {
        public string PreferenceType { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
    }

    public class UserPreferenceRetrieveRequest : ServiceRequest
    {
        public string PreferenceType { get; set; }
        public string Name { get; set; }
    }

    public class UserPreferenceRetrieveResponse : ServiceResponse
    {
        public string Value { get; set; }
    }

}