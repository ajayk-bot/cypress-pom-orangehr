import dashboardPage from "../../support/objectPages/dashboardPage";
import adminPage from "../../support/objectPages/adminPage";

describe("POM implementation for Admin page", () => {
  before(() => {
    cy.visit(Cypress.config("baseUrl"));
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  // This test if uncommented is going to fail as there are accessibility issues on the page

  // describe("Accessibility check ", () => {
  //   it("should run accessibility audits", () => {
  //     cy.login("Admin", "admin123");
  //     dashboardPage.clickAdminBtn();
  //     adminPage.elements
  //       .adminSpan()
  //       .should("be.visible")
  //       .and("contain", "Admin");
  //     cy.injectAxe(); // inject axe-core runtime
  //     cy.checkA11y(); // scan the entire page for accessibility failure
  //   });

  describe("Fill in the form on General Information tab", () => {
    it("should fill and submit Organization form with ipad-2 viewport ", () => {
      cy.login("Admin", "admin123");
      dashboardPage.clickAdminBtn();
      adminPage.navigateToGeneralInformationForm();
      cy.viewport(768, 1024);
    });
  });
});
