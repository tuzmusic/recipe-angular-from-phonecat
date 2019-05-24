describe("recipe", function() {
  beforeEach(module("recipe"));

  describe("recipeController", function() {
    let ctrl, recipe;

    beforeEach(inject($componentController => {
      ctrl = $componentController("recipe");
      recipe = ctrl.recipe;
    }));

    it("should create a recipe with a title", () => {
      expect(recipe.title).toEqual("Chocolate Chip Cookies");
    });

    it("should create a recipe with steps", () => {
      expect(recipe.steps.length).toBe(3);
    });

    it("should have a slug id", () => {
      expect(recipe.slug).toEqual("chocolate-chip-cookies");
    });
  });
});