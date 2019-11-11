class ForgotPassword {
  get linkForgot() {
    return $(".form-group a");
  }
  get titleForgot() {
    return $(".page-subheading");
  }
  get emailForgot() {
    return $("#email");
  }
  get btnRetrieve() {
    return $(".submit button");
  }
  get alertSuccess() {
    return $(".alert-success");
  }
  /* alertSuccessTxt() {
        this.alertSuccess.getText();
    }*/

  //Este método esta comentado ya que no me funcionó de esta forma y no entendí a que se debe.
  //Lo aplique en línea y funcionó(alertSucces.getText() dentro del spec), pero llamandolo no me funciona.
  btnRetrieveClick() {
    return this.btnRetrieve.click();
  }
  titleForgotPass() {
    return this.titleForgot.getText();
  }
  submitForgot() {
    this.linkForgot.click();
  }
}
export default new ForgotPassword();
