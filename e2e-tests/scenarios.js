// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe("Recipe index page", function() {
  let recipeList;

  beforeEach(function() {
    browser.get("index.html");
    recipeList = element.all(by.repeater("recipe in $ctrl.recipes"));
  });

  it("shows the list of recipes", () => {
    expect(recipeList.count()).toBe(2);
  });

  it("lists the recipe titles", () => {
    const titles = recipeList.map(r => r.getText());
    expect(titles).toContain("Chocolate Chip Cookies");
  });

  it("links to each recipe", () => {
    let links = element.all(by.css("a"));
    expect(links.count()).toBe(2);
    expect(links.first().getAttribute("href")).toContain(
      "chocolate-chip-cookies"
    );
  });
});

fdescribe("Recipe show page", () => {
  beforeEach(() => {
    browser.get("index.html#!/recipes/chocolate-chip-cookies");
  });

  it("should display the recipe", () => {
    expect(
      element(by.css("#recipe-title").getText()).toBe("chocolate-chip-cookies")
    );
  });
});
