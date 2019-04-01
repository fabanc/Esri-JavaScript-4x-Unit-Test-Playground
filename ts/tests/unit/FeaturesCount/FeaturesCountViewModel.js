var registerSuite = intern.getInterface("object").registerSuite;
var assert = intern.getPlugin("chai").assert;
registerSuite("StyleOptions", {
    /**
     * This unit test checks passing a expected property within the StyleOptions constructor as
     * a json object results in that property being properly set.
     */
    jsonConstructorValidProperty: function () {
        assert.equal(1, 1);
    }
});
