angular.module("recipeDetail").component("recipeDetail", {
  templateUrl:
    "modules/recipe-detail/recipe-detail/recipe-detail.template.html",
  controller: [
    "$http",
    "$routeParams",
    function RecipeDetailController($http, $routeParams) {
      this.currentStep = 0;

      $http
        .get("api-data/recipes/" + $routeParams.recipeId + ".json")
        .then(res => handleData(res.data));

      handleData = data => {
        this.recipe = data;
      };

      this.incrementStep = () => {
        if (this.currentStep === this.recipe.steps.length - 1) return;
        this.currentStep += 1;
      };

      this.decrementStep = () => {
        if (this.currentStep === 0) return;
        this.currentStep -= 1;
      };
    }
  ]
});
