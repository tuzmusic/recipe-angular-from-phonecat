const aRecipe = {
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

angular.module("recipe").component("recipe", {
  template: "<p>here is a recipe</p>",
  controller: function RecipeController() {
    this.recipe = aRecipe;
  }
});
