class MyInfoPage {
  elements = {
    pimSpan: () => cy.get('span[class="oxd-topbar-header-breadcrumb"]'),
  };
}

module.exports = new MyInfoPage();
