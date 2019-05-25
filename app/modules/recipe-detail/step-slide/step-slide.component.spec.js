describe("stepSlide", () => {
  beforeEach(module("recipeDetail"));

  describe("StepSlideController", () => {
    let ctrl;

    beforeEach(inject($componentController => {
      ctrl = $componentController("stepSlide", null, { step });
    }));

    it("should create a `stepSlide` model with a step", () => {
      expect(ctrl.step.text).toEqual("Mix ingredients");
    });
  });
});

let step = { text: "Mix ingredients" };
