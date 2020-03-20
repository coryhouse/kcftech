describe("Corporations", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should display a list of corporations", () => {
    cy.findByText("Corporations");
  });

  it.only("should delete a corporation when the delete button is clicked", () => {
    cy.findByText("Apple");
    cy.findByLabelText("Delete Apple with ID 1").click();
    cy.findByText("Apple").should("not.exist");
  });
});
