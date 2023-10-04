using Microsoft.AspNetCore.Mvc;
using Serene.Administration;
using Serenity.Extensions;

namespace Serene.Membership.Pages;

[Route("Account/[action]")]
public class AccountPasswordActionsPage : AccountPasswordActionsPageBase<UserRow>
{
}
