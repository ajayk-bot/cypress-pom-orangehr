import dashboardPage from "../../support/objectPages/dashboardPage";
import adminPage from "../../support/objectPages/adminPage";
import myInfoPage from "../../support/objectPages/myInfoPage";

describe("POM implementation for My Info page", () => {
  before(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });

  it("should upload the profile picture", () => {
    cy.login("Admin", "admin123");
    dashboardPage.elements.dashboardSpan().should("exist");

    dashboardPage.clickMyInfoBtn();
    adminPage.elements.adminSpan().should("contain", "PIM");

    // File upload using cypress-file-upload npm package
    const filepath = "picture.png";
    cy.get('div[class="orangehrm-edit-employee-image"]').click();
    cy.contains("Change Profile Picture");
    // cy.get('button[class="employee-image-wrapper"]')
    cy.attachFile(filepath);
    // cy.get('button[type="submit"]').click();
  });
});
