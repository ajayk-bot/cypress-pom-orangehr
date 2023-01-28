import dashboardPage from "../../support/objectPages/dashboardPage";
import adminPage from "../../support/objectPages/adminPage";
import loginPage from "../../support/objectPages/loginPage";
import updatePasswordPage from "../../support/objectPages/updatePasswordPage";

describe("POM implementation for Dashboard page", () => {
  before(() => {
    cy.visit(Cypress.config("baseUrl"));
  });

  describe("By using dropdown the user", () => {
    it("should be able to log out", () => {
      cy.login("Admin", "admin123");
      dashboardPage.navigateToUserDropdown();
      cy.get('ul[class="oxd-dropdown-menu"]').children("li").eq(3).click();

      // Verify user is logged out
      loginPage.elements.loginTitle().should("have.text", "Login");
    });

    it("should be able to display ABOUT alert", () => {
      cy.login("Admin", "admin123");
      dashboardPage.navigateToUserDropdown();
      cy.get('ul[class="oxd-dropdown-menu"]').children("li").eq(0).click();

      // Verify alert is displayed
      loginPage.elements.dropdownAboutAlert().should("have.text", "About");
    });

    it("should be able to change password", () => {
      cy.login("Admin", "admin123");
      dashboardPage.navigateToUserDropdown();
      cy.get('ul[class="oxd-dropdown-menu"]').children("li").eq(2).click();

      // Type current & new passwords
      updatePasswordPage.elements.currentPwdField().type("admin123");
      updatePasswordPage.elements.newPwdField().type("NewPassword123!");
      updatePasswordPage.elements.confirmPwdField().type("NewPassword123!");
      updatePasswordPage.elements.submitBtn().click();

      // Verify confirm pop-up - saved successfully
      cy.on("window:alert", (str) => {
        expect(str).to.equal("Sucess");
      });
    });
  });

  describe("Navigate to other pages", () => {
    it("should be able to navigate to Admin page", () => {
      cy.login("Admin", "admin123");
      dashboardPage.clickAdminBtn();
      adminPage.elements.adminSpan().should("contain", "Admin");
    });

    it("should be able to navigate to My Info page", () => {
      cy.login("Admin", "admin123");

      dashboardPage.clickMyInfoBtn();
      dashboardPage.elements.dashboardSpan().should("have.text", "PIM");
    });
  });
});
