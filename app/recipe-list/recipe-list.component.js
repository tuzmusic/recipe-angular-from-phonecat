function RecipeListController($http) {
  let self = this;
  $http.get("recipes.json").then(res => {
    console.log(res.data);

    self.recipes = res.data;
  });

  // this.recipes = recipes;
}

angular.module("recipeList").component("recipeList", {
  templateUrl: "recipe-list/recipe-list.template.html",
  controller: ["$http", RecipeListController]
});

const recipes = [
  {
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
  },
  {
    title: "Guacomole",
    slug: "guacomole",
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
