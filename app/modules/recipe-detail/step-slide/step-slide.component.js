angular.module("recipeDetail").component("stepSlide", {
  templateUrl: "modules/recipe-detail/step-slide/step-slide.template.html",
  bindings: {
    step: "<",
    onPrevClick: "&",
    onNextClick: "&"
  },
  controller: function StepSlideController() {}
});
