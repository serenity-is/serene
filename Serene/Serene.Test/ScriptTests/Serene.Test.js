var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var Test;
        (function (Test) {
            var assert = QUnit.assert;
            QUnit.module('Serene.Administration');
            QUnit.test('UserDialog tests', function () {
                assert.notEqual(null, new Administration.UserDialog(), 'create a new instance');
            });
        })(Test = Administration.Test || (Administration.Test = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
//# sourceMappingURL=Serene.Test.js.map