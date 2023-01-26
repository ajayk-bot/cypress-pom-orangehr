import loginPage from "../../support/objectPages/loginPage";
import dashboardPage from "../../support/objectPages/dashboardPage";

describe("POM implementation for Login page", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("should have incorrect username", () => {
    loginPage.typeUsername("dummy_username");
    loginPage.typePassword("admin123");
    loginPage.clickLogin();

    loginPage.elements.errorMsg().should("have.text", "Invalid credentials");
  });

  it("should have incorrect password", () => {
    loginPage.typeUsername("Admin");
    loginPage.typePassword("dummy_password");
    loginPage.clickLogin();

    loginPage.elements.errorMsg().should("have.text", "Invalid credentials");
  });

  it("should login to dashboard page", () => {
    cy.login("Admin", "admin123");
    dashboardPage.elements.dashboardSpan().should("have.text", "Dashboard");
  });
});
