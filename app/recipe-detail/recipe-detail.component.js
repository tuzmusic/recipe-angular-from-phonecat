function RecipeController() {
  recipe = mockRecipe;
  this.recipe = recipe;
}

angular.module("recipe-detail").component("recipe-detail", {
  templateUrl: "recipe/recipe.template.html",
  controller: RecipeController
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
