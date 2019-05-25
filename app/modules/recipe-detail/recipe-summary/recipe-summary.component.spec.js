describe("recipeSummary", function() {
  beforeEach(module("recipeDetail"));

  describe("recipeSummaryController", function() {
    let ctrl;

    beforeEach(inject($componentController => {
      ctrl = $componentController("recipeSummary", null, { recipe });
    }));

    it("should create a `recipeSummary` model with a recipe", () => {
      expect(ctrl.recipe).toEqual(recipe);
      expect(ctrl.recipe.title).toEqual(recipe.title);
    });
  });
});

let recipe = {
  title: "Chocolate Chip Cookies",
  slug: "chocolate-chip-cookies",
  ingredients: [
    { text: "1 cup of flour" },
    { text: "1 tbsp sugar" },
    { text: "1 bag chocolate chips" }
  ],
  steps: [
    { text: "Mix ingredients" },
    { text: "Bake ingredients" },
    { text: "Eat cookies!" }
  ]
};
