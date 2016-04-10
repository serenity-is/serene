namespace Serene.Administration.Test {
    let assert: QUnitAssert = QUnit.assert;
    QUnit.module('Serene.Administration');

    QUnit.test('UserDialog tests', function () {
        assert.notEqual(null, new UserDialog(),
            'create a new instance');
    });
}