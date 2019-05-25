angular.module("recipeDetail").component("stepSlide", {
  template: "<p class='step-text'>Mix ingredients</p>",
  // templateUrl: "step-slide/step-slide.template.html",
  controller: function StepSlideController() {
    this.step = {
      text: "Add 1 tbsp of sugar"
    };
  }
});
