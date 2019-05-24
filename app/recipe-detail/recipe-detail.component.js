function RecipeDetailController($routeParams) {
  recipe = mockRecipe;
  // this.recipe = recipe;
  this.recipeId = $routeParams.recipeId;
}

angular.module("recipeDetail").component("recipeDetail", {
  templateUrl: "recipe-detail/recipe-detail.template.html",
  controller: RecipeDetailController
});

const mockRecipe = {
  title: "Chocolate Chip Cookies",
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
