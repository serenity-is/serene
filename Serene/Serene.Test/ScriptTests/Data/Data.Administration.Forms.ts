namespace Serene.Administration.Test {
    export let dataUserForm = [
        { "name": "Username", "title": "Db.Administration.User.Username", "editorParams": { "maxLength": 100 }, "maxLength": 100, "required": true, "width": 150 },
        { "name": "DisplayName", "title": "Db.Administration.User.DisplayName", "editorParams": { "maxLength": 100 }, "maxLength": 100, "width": 150 },
        { "name": "Email", "title": "Db.Administration.User.Email", "editorType": "Email", "editorParams": { "maxLength": 100 }, "maxLength": 100, "width": 150, "filteringType": "Editor", "filteringParams": { "editorType": "Email", "useLike": true } },
        { "name": "Password", "title": "Db.Administration.User.Password", "editorType": "Password", "editorParams": { "maxLength": 50 }, "maxLength": 50, "width": 150, "filteringType": "Editor", "filteringParams": { "editorType": "Password", "useLike": true } },
        { "name": "PasswordConfirm", "title": "Db.Administration.User.PasswordConfirm", "editorType": "Password", "editorParams": { "maxLength": 50 }, "maxLength": 50, "oneWay": true, "width": 150, "filteringType": "Editor", "filteringParams": { "editorType": "Password", "useLike": true } },
        { "name": "Source", "title": "Db.Administration.User.Source", "editorParams": { "maxLength": 4 }, "maxLength": 4, "required": true, "insertable": false, "updatable": false, "oneWay": true, "defaultValue": "site", "width": 150 }
    ];
}