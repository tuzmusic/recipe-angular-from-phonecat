describe("recipeDetail", function() {
  beforeEach(module("recipeDetail"));

  describe("recipeController", function() {
    let ctrl, recipe;

    beforeEach(inject($componentController => {
      ctrl = $componentController("recipeDetail");
      recipe = ctrl.recipe;
    }));

    it("should create a recipe with a title", () => {
      expect(recipe.title).toEqual("Chocolate Chip Cookies");
    });

    it("should create a recipe with steps", () => {
      expect(recipe.steps.length).toBe(3);
    });
  });
});
