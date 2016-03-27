declare namespace Serene {
    interface ScriptUserDefinition {
        Username: string;
        DisplayName: string;
        Permissions: {
            [key: string]: boolean;
        };
    }
}
