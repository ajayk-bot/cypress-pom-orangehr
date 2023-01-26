class loginPage {
  elements = {
    usernamenInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginBtn: () => cy.get('button[type="submit"]'),
    errorMsg: () => cy.get('div[role="alert"]'),
    // forgotPasswordBtn: () => cy.contains("Forgot your password?"),
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
}

module.exports = new loginPage();

// what means this here
// why the same in brackests word
