describe("Corporations", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should display a list of corporations", () => {
    cy.findByText("Corporations");
  });
});
