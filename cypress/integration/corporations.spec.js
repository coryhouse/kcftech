describe("Corporations", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should display a list of corporations", () => {
    cy.findByText("Corporations");
  });

  it.only("should support adding and deleting a corporation", () => {
    cy.findByLabelText("Name").type("Test corp");
    cy.findByLabelText("Icon").type("Test icon");
    cy.findByText("Add Corporation").click();
    // Now assure that the form has been cleared after submission.
    cy.findByLabelText("Name").should("have.value", "");
    cy.findByLabelText("Icon").should("have.value", "");

    // Assure the data we just saved is now displayed
    cy.findByText("Test corp");
    cy.findByText("Test icon");

    // Finally, delete the record that was just added
    cy.findByLabelText("Delete Test corp").click();
    cy.findByText("Test corp").should("not.exist");
  });
});
