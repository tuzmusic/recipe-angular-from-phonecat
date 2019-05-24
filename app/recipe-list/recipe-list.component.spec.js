describe("recipeList", function() {
  beforeEach(module("recipeList"));

  describe("recipeListController", function() {
    let ctrl, $httpBackend;

    beforeEach(inject(($componentController, _$httpBackend_) => {
      $httpBackend = _$httpBackend_;
      $httpBackend
        .expectGET("api-data/recipes.json")
        .respond([
          { title: "Chocolate Chip Cookies", id: "chocolate-chip-cookies" },
          { title: "Guacomole", id: "guacomole" }
        ]);
      ctrl = $componentController("recipeList");
    }));

    it("should get a list of recipes with titles and ids", () => {
      expect(ctrl.recipes).toBeUndefined();
      $httpBackend.flush();
      expect(ctrl.recipes.length).toBe(2);
      expect(ctrl.recipes[0].title).toEqual("Chocolate Chip Cookies");
    });
  });
});
