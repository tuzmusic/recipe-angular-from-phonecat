"use strict";

// Register `stepSlide` component, along with its associated controller and template
angular.module("stepSlide").component("stepSlide", {
  templateUrl: "step-slide/step-slide.template.html",
  controller: function StepSlideController() {
    this.phones = [
      {
        name: "Nexus S",
        snippet: "Fast just got faster with Nexus S."
      },
      {
        name: "Motorola XOOM™ with Wi-Fi",
        snippet: "The Next, Next Generation tablet."
      },
      {
        name: "MOTOROLA XOOM™",
        snippet: "The Next, Next Generation tablet."
      }
    ];
  }
});
