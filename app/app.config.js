angular.module("recipeApp").config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/recipes", {
        template: "<recipe-list></recipe-list>"
      })
      .when("/recipes/:recipeId", {
        template: "<recipe-detail></recipe-detail>"
      })
      .otherwise("/recipes");
  }
]);
