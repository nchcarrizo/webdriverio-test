class LoginPage {
  get username() {
    return $("#email");
  }
  get password() {
    return $("#passwd");
  }
  get submitBtnSignIn() {
    return $("#SubmitLogin");
  }
  get alert() {
    return $(".alert-danger li");
  }
  get breadCrumb() {
    return $(".home");
  }

  breadCrumbClick() {
    this.breadCrumb.click();
  }

  alertText() {
    this.alert.waitForDisplayed();
    return this.alert.getText();
  }

  submit() {
    this.submitBtnSignIn.click();
  }
  /*  open() {
        super.open('login')
    }*/
}

export default new LoginPage();
