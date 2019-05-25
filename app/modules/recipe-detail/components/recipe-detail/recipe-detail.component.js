angular.module("recipeDetail").component("recipeDetail", {
  templateUrl:
    "modules/recipe-detail/components/recipe-detail/recipe-detail.template.html",
  transclude: true,
  controller: [
    "$http",
    "$routeParams",
    function RecipeDetailController($http, $routeParams) {
      $http
        .get("api-data/recipes/" + $routeParams.recipeId + ".json")
        .then(res => handleData(res.data));

      handleData = data => {
        this.recipe = data;
      };
    }
  ]
});
