class adminPage {
  elements = {
    adminSpan: () => cy.get('span[class="oxd-topbar-header-breadcrumb"]'),
    oragnizationTabId: () =>
      cy.xpath("//span[normalize-space()='Organization']"),
    generalInformationTabId: () =>
      cy.xpath("//a[normalize-space()='General Information']"),
    formId: () => cy.xpath("//*[@id='app']/div[1]/div[2]/div[2]/div/div"),
    editBtn: () => cy.get(".oxd-switch-input"),
    registartionNumberId: () =>
      cy.xpath(
        '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input'
      ),
    taxId: () =>
      cy.xpath(
        '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input'
      ),
    phoneId: () =>
      cy.xpath(
        '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[1]/div/div[2]/input'
      ),
    emailId: () =>
      cy.xpath(
        '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[3]/div/div[2]/input'
      ),
    streetId: () =>
      cy.xpath(
        '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[4]/div/div[1]/div/div[2]/input'
      ),
    cityId: () =>
      cy.xpath(
        '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[4]/div/div[3]/div/div[2]/input'
      ),
    postalCodeId: () =>
      cy.xpath(
        '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[5]/div/div[2]/div/div[2]/input'
      ),
    countryId: () =>
      cy.xpath(
        '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[5]/div/div[3]/div/div[2]/div/div/div[1]'
      ),
  };

  navigateToGeneralInformationForm() {
    this.elements.oragnizationTabId().click();
    this.elements.generalInformationTabId().click();
    this.elements.formId().should("be.visible");
  }

  clickEditToggle() {
    this.elements.editBtn().click({ force: true });
  }

  enterRegistrationNumber() {
    this.elements.registartionNumberId().type();
  }

  enterPhone() {
    this.elements.phoneId().type();
  }

  enterEmail() {
    this.elements.emailId().clear({ force: true });
  }

  enterCity() {
    this.elements.streetId().clear().type();
  }

  enterCity() {
    this.elements.cityId().clear().type();
  }

  enterPostalCode() {
    this.elements.postalCodeId().type();
  }

  selectCountry() {
    this.elements.countryId().select("3");
  }
}
module.exports = new adminPage();
