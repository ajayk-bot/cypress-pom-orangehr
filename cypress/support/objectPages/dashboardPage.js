class dashboardPage {
  elements = {
    dashboardSpan: () => cy.get('span[class="oxd-topbar-header-breadcrumb"]'),
    adminBtn: () => cy.contains("Admin"),
    myInfoBtn: () => cy.contains("My Info"),
  };

  clickAdminBtn() {
    this.elements.adminBtn().click();
  }

  clickMyInfoBtn() {
    this.elements.myInfoBtn().click();
  }
}

module.exports = new dashboardPage();
