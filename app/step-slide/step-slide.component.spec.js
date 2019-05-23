"use strict";

describe("stepSlide", function() {
  // Load the module that contains the `stepSlide` component before each test
  beforeEach(module("stepSlide"));

  // Test the controller
  describe("StepSlideController", function() {
    it("should create a `stepSlide` model with a step", inject(function(
      $componentController
    ) {
      var ctrl = $componentController("stepSlide");

      expect(ctrl.step.text).toEqual("Add 1 tbsp of sugar");
    }));
  });
});
