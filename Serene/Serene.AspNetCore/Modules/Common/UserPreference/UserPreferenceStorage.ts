namespace Serene.Common {
    export class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string {
            let value: string;

            UserPreferenceService.Retrieve({
                PreferenceType: "UserPreferenceStorage",
                Name: key
            },
            response => value = response.Value,
            {
                async: false
            });

            return value;
        }

        setItem(key: string, data: string): void {
            UserPreferenceService.Update({
                PreferenceType: "UserPreferenceStorage",
                Name: key,
                Value: data
            });
        }
    }
}