
namespace Serene.Administration;

public interface IDirectoryService
{
    DirectoryEntry Validate(string username, string password);
}