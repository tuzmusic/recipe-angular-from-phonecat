angular.module("recipeDetail").component("currentStep", {
  template: '<h1 class="step-text">{{ $ctrl.step.text }}</h1>',
  bindings: {
    step: "<"
  },
  controller: function CurrentStepController() {}
});
