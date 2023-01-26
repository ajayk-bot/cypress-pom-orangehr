class adminPage {
  elements = {
    adminSpan: () => cy.get('span[class="oxd-topbar-header-breadcrumb"]'),
    addBtn: () => cy.contains("Add"),
    resetBtn: () => cy.contains("Reset"),
    searchBtn: () => cy.contains("Search"),
    addFormUserRoleDropdown: () => cy.get('i[class="oxd-icon"]'),
  };

  // clickAdminBtn() {
  //   this.elements.adminBtn().click();
  // }
}

module.exports = new adminPage();
