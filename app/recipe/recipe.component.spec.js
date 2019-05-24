describe("recipe", function() {
  // Load the module that contains the `recipe` component before each test
  beforeEach(module("recipe"));

  // Test the controller
  describe("recipeController", function() {
    let ctrl;

    beforeEach(inject($componentController => {
      ctrl = $componentController("recipe");
    }));

    it("should create a recipe with a title", () => {
      expect(ctrl.recipe.title).toEqual("Chocolate Chip Cookies");
    });

    it("should create a recipe with steps", () => {
      expect(ctrl.recipe.steps.length).toBe(3);
    });
  });
});
