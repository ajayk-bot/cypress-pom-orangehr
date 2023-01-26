import dashboardPage from "../../support/objectPages/dashboardPage";
import adminPage from "../../support/objectPages/adminPage";
import MyInfoPage from "../../support/objectPages/myInfoPage";

describe("POM implementation for Dashboard page", () => {
  before(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });

  it("should navigate to Admin page", () => {
    cy.login("Admin", "admin123");
    dashboardPage.elements.dashboardSpan().should("have.text", "Dashboard");

    dashboardPage.clickAdminBtn();
    adminPage.elements.adminSpan().should("contain", "Admin");
  });

  it.only("should navigate to My Info page", () => {
    cy.login("Admin", "admin123");
    dashboardPage.elements.dashboardSpan().should("have.text", "Dashboard");

    dashboardPage.clickMyInfoBtn();
    dashboardPage.elements.dashboardSpan().should("have.text", "PIM");
  });
});
