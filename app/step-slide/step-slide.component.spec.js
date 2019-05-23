"use strict";

describe("stepSlide", function() {
  // Load the module that contains the `stepSlide` component before each test
  beforeEach(module("stepSlide"));

  // Test the controller
  describe("StepSlideController", function() {
    it("should create a `phones` model with 3 phones", inject(function(
      $componentController
    ) {
      var ctrl = $componentController("stepSlide");

      expect(ctrl.phones.length).toBe(3);
    }));
  });
});
