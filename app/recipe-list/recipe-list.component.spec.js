describe("recipeList", function() {
  // Load the module that contains the `recipeList` component before each test
  beforeEach(module("recipeList"));

  // Test the controller
  describe("recipeListController", function() {
    let ctrl;

    beforeEach(inject($componentController => {
      ctrl = $componentController("recipeList");
    }));

    it("should create a list of recipes", () => {
      expect(ctrl.recipes.length).toBe(2);
    });

    it("should have titled recipes", () => {
      expect(ctrl.recipes[0].title).toEqual("Chocolate Chip Cookies");
    });
  });
});
