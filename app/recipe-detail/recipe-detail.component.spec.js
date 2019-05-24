describe("recipeDetail", function() {
  beforeEach(module("recipeDetail"));

  describe("recipeDetailController", function() {
    let ctrl, $httpBackend;

    beforeEach(inject(($componentController, _$httpBackend_, $routeParams) => {
      $httpBackend = _$httpBackend_;
      $httpBackend
        .expectGET("api-data/recipes/chocolate-chip-cookies.json")
        .respond(recipeData);
      $routeParams.recipeId = "chocolate-chip-cookies";
      ctrl = $componentController("recipeDetail");
      expect(ctrl.recipe).toBeUndefined();
      $httpBackend.flush();
    }));

    it("should get a recipe with a title", () => {
      expect(ctrl.recipe.title).toEqual("Chocolate Chip Cookies");
    });

    it("should get a recipe with steps", () => {
      expect(ctrl.recipe.steps.length).toBe(3);
    });
  });
});

let recipeData = {
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
