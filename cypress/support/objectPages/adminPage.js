class adminPage {
  elements = {
    adminSpan: () => cy.get('span[class="oxd-topbar-header-breadcrumb"]'),
    oragnizationTabId: () =>
      cy.xpath("//span[normalize-space()='Organization']"),
    generalInformationTabId: () =>
      cy.xpath("//a[normalize-space()='General Information']"),
  };

  navigateToGeneralInformationForm() {
    this.elements.oragnizationTabId().click();
    this.elements.generalInformationTabId().click();
  }
}

module.exports = new adminPage();
