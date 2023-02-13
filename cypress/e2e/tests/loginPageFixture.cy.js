import loginPage from "../../support/objectPages/loginPage";
import dashboardPage from "../../support/objectPages/dashboardPage";

const tests = require("../../fixtures/data-driven/loginUsers.json");

describe("Login Page correct & incorrect login credentials", () => {
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"));
  });

  tests.forEach((test) => {
    it(test.name, () => {
      loginPage.typeUsername(test.username);
      loginPage.typePassword(test.password);
      loginPage.clickLogin();

      if (test.name === "should login to Dashboard page") {
        dashboardPage.elements.dashboardSpan().should("have.text", "Dashboard");
      } else {
        loginPage.elements.errorMsg().should("have.text", test.expected);
      }
    });
  });
});
