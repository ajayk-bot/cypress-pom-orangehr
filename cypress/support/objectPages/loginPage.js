class loginPage {
  elements = {
    usernamenInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginBtn: () => cy.get('button[type="submit"]'),
    errorMsg: () => cy.get('div[role="alert"]'),
    emptyUsernameFieldMsg: () => cy.get(".oxd-input-group > .oxd-text"),
    emptyPasswordFieldMsg: () => cy.get(".oxd-input-group > .oxd-text"),
    forgotPasswordBtn: () => cy.contains("Forgot your password?"),
  };

  typeUsername(username) {
    this.elements.usernamenInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  clickForgotPasswordBtn() {
    this.elements.forgotPasswordBtn().click();
  }
}

module.exports = new loginPage();
