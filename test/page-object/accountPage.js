class createAccount {
  get email() {
    return $("#email_create");
  }
  get emailPersonalInformation(){
    return $("#email")
  }
  get btncreate() {
    return $("#SubmitCreate");
  }
  get mr() {
    return $("#id_gender1");
  }
  get customerFirstName() {
    return $("#customer_firstname");
  }
  get lastName() {
    return $("#customer_lastname");
  }
  get passwordCreate() {
    return $("#passwd");
  }
  get address() {
    return $("#address1");
  }
  get city() {
    return $("#city");
  }
  get dropDown() {
    return $("#id_state");
  }
  get postCode() {
    return $("#postcode");
  }
  get country() {
    return $("#id_country");
  }
  get phoneMobile() {
    return $("#phone_mobile");
  }
  get submitBtnRegister() {
    return $("#submitAccount");
  }
  get alert() {
    return $(".alert-danger li");
  }
  get firstNameYourAddress() {
    return $('#firstname');
  }
  get lastNameYourAddress() {
    return $('#lastname');
  }
  get company() {
    return $('#company')
  }
  get additionalInfo() {
    return $('#other')
  }
  get phone() {
    return $('#phone')
  }
  alertText() {
    return this.alert.getText();
  }
  submitBtnReg() {
    this.submitBtnRegister.click();
  }
  submitMr() {
    this.mr.click();
  }
  submitBtnCreate() {
    this.btncreate.click();
  }
  emailClear(){
    this.emailPersonalInformation.clearValue();
  }
  clearFirstNameYourAddress(){
    this.firstNameYourAddress.clearValue();
  }
  clearLastNameYourAddress(){
    this.lastNameYourAddress.clearValue();
  }
}
export default new createAccount();
