angular.module("recipeDetail").component("stepSlide", {
  template: "<p class='step-text'>Mix ingredients</p>",
  controller: function StepSlideController() {
    this.step = {
      text: "Add 1 tbsp of sugar"
    };
  }
});
