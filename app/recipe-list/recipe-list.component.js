const recipes = [
  {
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
  },
  {
    title: "Guacomole",
    ingredients: [
      { text: "1 avocado" },
      { text: "1 tomato, diced" },
      { text: "1/2 cup onion, diced" },
      { text: "1/4 cup cilantro, chopped" }
    ],
    steps: [
      { text: "Mix ingredients" },
      { text: "Refridgerate for 30 minutes" },
      { text: "Eat with chips" }
    ]
  }
];

angular.module("recipeList").component("recipeList", {
  templateUrl: "recipe-list/recipe-list.template.html",
  controller: function RecipeListController() {
    this.recipes = recipes;
  }
});
