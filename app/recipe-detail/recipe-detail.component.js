function RecipeDetailController($http, $routeParams) {
  $http.get("api-data/recipes/" + $routeParams.recipeId + ".json").then(res => {
    this.recipe = res.data;
  });
}

angular.module("recipeDetail").component("recipeDetail", {
  templateUrl: "recipe-detail/recipe-detail.template.html",
  controller: ["$http", "$routeParams", RecipeDetailController]
});
