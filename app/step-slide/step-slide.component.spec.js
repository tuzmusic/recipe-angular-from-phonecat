describe("stepSlide", function() {
  // Load the module that contains the `stepSlide` component before each test
  beforeEach(module("recipeDetail"));

  // Test the controller
  describe("StepSlideController", function() {
    let ctrl;

    beforeEach(inject($componentController => {
      ctrl = $componentController("stepSlide", null, { step: step });
    }));

    it("should create a `stepSlide` model with a step", () => {
      expect(ctrl.step.text).toEqual("Mix ingredients");
    });
  });
});

let step = { text: "Mix ingredients" };
