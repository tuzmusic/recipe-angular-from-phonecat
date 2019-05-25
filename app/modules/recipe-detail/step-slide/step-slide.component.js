angular.module("recipeDetail").component("stepSlide", {
  templateUrl: "modules/recipe-detail/step-slide/step-slide.template.html",
  transclude: true,
  // require: { recipeCtrl: "^recipeDetail" },
  bindings: { step: "<" },
  controller: function StepSlideController() {
    this.step = {
      text: "Add 1 tbsp of sugar"
    };
  }
});
