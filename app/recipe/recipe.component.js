function RecipeController() {
  recipe = mockRecipe;
  recipe.slug = slugify(recipe.title);
  this.recipe = recipe;
}

angular.module("recipe").component("recipe", {
  template: "<p>here is a recipe</p>",
  controller: RecipeController
});

function slugify(input) {
  if (!input) return;
  var slug = input.toLowerCase().trim();
  slug = slug.replace(/[^a-z0-9\s-]/g, " ");
  slug = slug.replace(/[\s-]+/g, "-");
  return slug;
}

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
