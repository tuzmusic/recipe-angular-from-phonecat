"use strict";

// Register `stepSlide` component, along with its associated controller and template
angular.module("stepSlide").component("stepSlide", {
  templateUrl: "step-slide/step-slide.template.html",
  controller: function StepSlideController() {
    this.step = {
      text: "Add 1 tbsp of sugar"
    };
  }
});
