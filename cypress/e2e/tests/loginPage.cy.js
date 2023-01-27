import loginPage from "../../support/objectPages/loginPage";
import dashboardPage from "../../support/objectPages/dashboardPage";
import resetPasswordPage from "../../support/objectPages/resetPasswordPage";

describe("POM implementation for Login page", () => {
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"));
  });

  describe("Positive test scenario", () => {
    it("should login successfully", () => {
      cy.login("Admin", "admin123");
      dashboardPage.elements.dashboardSpan().should("have.text", "Dashboard");
    });
  });

  describe("Negative test scenarios", () => {
    it("should have displayed incorrect username error message", () => {
      loginPage.typeUsername("dummy_username");
      loginPage.typePassword("admin123");
      loginPage.clickLogin();

      loginPage.elements.errorMsg().should("have.text", "Invalid credentials");
    });

    it("should have displayed incorrect password error message", () => {
      loginPage.typeUsername("Admin");
      loginPage.typePassword("dummy_password");
      loginPage.clickLogin();

      loginPage.elements.errorMsg().should("have.text", "Invalid credentials");
    });

    it("should have displayed empty username field", () => {
      loginPage.typeUsername(" ");
      loginPage.typePassword("admin123");
      loginPage.clickLogin();

      loginPage.elements
        .emptyUsernameFieldMsg()
        .should("have.text", "Required");
    });

    it("should have displayed empty password field", () => {
      loginPage.typeUsername("Admin");
      loginPage.typePassword(" ");
      loginPage.clickLogin();

      loginPage.elements
        .emptyPasswordFieldMsg()
        .should("have.text", "Required");
    });

    it("should be able to reset password", () => {
      loginPage.clickForgotPasswordBtn();

      // Navigate to Reset Password page & verify its title
      resetPasswordPage.elements
        .resetPasswordSpan()
        .should("be.visible")
        .and("have.text", "Reset Password");

      // Enter username credentials & submit
      resetPasswordPage.elements.usernameField().type("Admin");
      resetPasswordPage.elements.resetPasswordBtn().click();

      // Verify reset password link is sent successfully
      resetPasswordPage.elements
        .successfulPasswordResetMsg()
        .should("be.visible")
        .and("have.text", "Reset Password link sent successfully");
    });
  });
});
