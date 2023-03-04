import dashboardPage from "../../support/objectPages/dashboardPage";
import adminPage from "../../support/objectPages/adminPage";

describe("POM implementation for Admin page", () => {
  before(() => {
    cy.visit(Cypress.config("baseUrl"));
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  describe("Fill in the form on General Information tab", () => {
    it("should fill and submit Organization form with ipad-2 viewport ", () => {
      cy.login("Admin", "admin123");
      dashboardPage.clickAdminBtn();
      adminPage.navigateToGeneralInformationForm();
      cy.viewport(768, 1024);
    });
  });
});
