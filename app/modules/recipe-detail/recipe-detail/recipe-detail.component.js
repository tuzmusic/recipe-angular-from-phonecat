angular.module("recipeDetail").component("recipeDetail", {
  templateUrl:
    "modules/recipe-detail/recipe-detail/recipe-detail.template.html",
  transclude: true,
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
        this.currentStep += 1;
      };
      this.decrementStep = () => {
        this.currentStep -= 1;
      };
    }
  ]
});
