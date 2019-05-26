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

describe("recipeSummary ViewUnitTest", () => {
  let scope;
  let $compile;
  beforeEach(module("recipeDetail"));

  beforeEach(inject(($rootScope, _$compile_) => {
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  it("should display the steps", () => {
    scope.recipe = recipe;
    let el = angular.element('<recipe-summary recipe="recipe"/>');
    el = $compile(el)(scope);
    scope.$digest;
    // expect(el[0].querySelectorAll("recipe-summary").length).toBe(1);
    expect(scope.recipe.title).toEqual("Chocolate Chip Cookies");
    expect(el[0].querySelectorAll("p").length).toBe(1);
    expect(el[0].querySelectorAll(".recipe-summary-step").length).toBe(3);
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
