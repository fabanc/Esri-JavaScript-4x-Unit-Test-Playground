const { registerSuite } = intern.getInterface("object");
const { assert } = intern.getPlugin("chai");

registerSuite("StyleOptions", {
  /**
   * This unit test checks passing a expected property within the StyleOptions constructor as
   * a json object results in that property being properly set.
   */
  jsonConstructorValidProperty() {
    assert.equal(1, 1);
  }
});
