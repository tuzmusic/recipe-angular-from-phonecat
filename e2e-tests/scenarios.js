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
    browser.get("#!/recipes/chocolate-chip-cookies");
  });

  it("should display the recipe title", () => {
    let title = element(by.id("recipe-title"));
    expect(title);
    expect(title.getText()).toEqual("Chocolate Chip Cookies");
  });

  it("shows the first step of the recipe", () => {
    let step = element(by.css(".step-text"));
    expect(step.getText()).toEqual("Mix ingredients");
  });

  it("shows the recipe summary", () => {
    let summary = element(by.css(".recipe-summary"));
    expect(summary.getText()).toContain("Mix ingredients");
  });

  it("can go between steps of the recipe", () => {
    let nextButton = element(by.css(".next-button"));
    let prevButton = element(by.css(".prev-button"));
    nextButton.click();
    let step = element(by.css(".step-text"));
    expect(step.getText()).toEqual("Bake ingredients");
    prevButton.click();
    expect(step.getText()).toEqual("Mix ingredients");
  });
});
