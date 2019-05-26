angular.module("recipeDetail").component("recipeSession", {
  templateUrl:
    "modules/recipe-detail/recipe-session/recipe-session.template.html",
  bindings: {
    recipe: "<",
    currentStep: "<",
    onPrevClick: "&",
    onNextClick: "&"
  },
  controller: function RecipeSessionController() {}
});
