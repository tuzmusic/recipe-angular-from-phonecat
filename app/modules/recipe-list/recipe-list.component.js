function RecipeListController($http) {
  $http.get("api-data/recipes.json").then(res => {
    this.recipes = res.data;
  });
}

angular.module("recipeList").component("recipeList", {
  templateUrl: "modules/recipe-list/recipe-list.template.html",
  controller: ["$http", RecipeListController]
});
