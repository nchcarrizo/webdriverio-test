import createAccount from "../page-object/accountPage";
import NavSection from "../page-object/nav.section";
import accountPage from "../page-object/accountPage";
import getRandomEmail from "../utils/getRandomEmail";

describe("Create account suite", () => {

  it("Verify the user able to access to Authentication SCREEN", () => {
    browser.url("");

    NavSection.submitI();
    const title = browser.getTitle();

    expect(title).toEqual("Login - My Store");
  });

  it("Verify email address format validation", () => {
    browser.url("");

    NavSection.submitI();
    accountPage.email.setValue("dawdadwaldklak.com");
    createAccount.submitBtnCreate();

    expect(createAccount.alertText()).toEqual("Invalid email address.");
  });

  it("Verify message when the client enters an unexisting-email, should be redirected to CREATE AN ACCOUNT", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue("redirected.test@gmail.com");
    createAccount.submitBtnCreate();
    const title = browser.getTitle();

    expect(title).toEqual("Login - My Store");
  });

  it("Verify message when the client enters an existing-email", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue("iignacio.test@gmail.com");
    createAccount.submitBtnCreate();

    expect(createAccount.alertText()).toEqual(
      "An account using this email address has already been registered. Please enter a valid password or request a new one."
    );
  });

  it('Verify First name is required', () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("firstname is required.");
  });

  it('Verify maximum characters in first name', () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("IgnacioIgnacioIgnacioIgnacioIgnacioIgnacioIgnacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("firstname is too long. Maximum length: 32");
  });

  it('Verify first name cannot start with a number', () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("3Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("firstname is invalid.");
  });

  it('Verify last name is required', () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual('lastname is required.');
  });

  it('Verify maximum characters in last name', () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("IgnacioIgnacioIgnacioIgnacioIgnacioIgnacioIgnacio");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("lastname is too long. Maximum length: 32");
  });

  it('Verify email field is required', () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.emailClear();
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("email is required.");
  });

  it('Verify correct validation of email', () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.emailPersonalInformation.setValue("djawddjawd.com");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("email is invalid.");
  });

  it('Verify password field is required', () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("passwd is required.");
  });

  it('Verify password field length cannot be less than 5 characters', () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("passwd is invalid.");
  });

  it("Verify First Name is incorrectly completed with more than 32 characters", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.firstNameYourAddress.setValue("IgnacioIgnacioIgnacioIgnacioIgnacioIgnacio");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("firstname is too long. Maximum length: 32");
  });

  it("Verify First Name cannot start with a number in your address area", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.firstNameYourAddress.setValue("3Ignacio");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("firstname is invalid.");
  });

  it("Verify First Name field is required on your address area", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.clearFirstNameYourAddress();
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("firstname is required.");
  });

  it("Verify Last Name is incorrectly completed with more than 32 characters", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.lastNameYourAddress.setValue("IgnacioIgnacioIgnacioIgnacioIgnacioIgnacio");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("lastname is too long. Maximum length: 32");
  });

  it("Verify Last Name cannot start with a number in your address area", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.lastNameYourAddress.setValue("3Ignacio");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("lastname is invalid.");
  });

  it("Verify Last Name is required in your address area", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.clearLastNameYourAddress();
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("lastname is required.");
  });
  
  it("Verify Company field is not allow to enter more than 64 characteres in your address area", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.company.setValue("TestIgnacioTestIgnacioTestIgnacioTestIgnacioTestIgnacioTestIgnacioTestIgnacioTestIgnacioTestIgnacioTestIgnacioTestIgnacioTestIgnacioTestIgnacioTestIgnacio")
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("company is too long. Maximum length: 64");
  });

  it("Verify address is required in your address area", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("address1 is required.");
  });

  it("Verify address field is not allows to enter more than 128 characters", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446125487446");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("address1 is too long. Maximum length: 128");
  });

  it("Verify city field is required in your address area", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("address1 is required.");
  });

  it("Verify city field is not allow to enter more than 64 characters in your address area", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("RosarioRosarioRosarioRosarioRosarioRosarioRosarioRosarioRosarioRosarioRosarioRosarioRosarioRosarioRosarioRosarioRosarioRosarioRosarioRosarioRosarioRosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("city is too long. Maximum length: 64");
  });

  it("Verify state field is required in your address area", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("-");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("This country requires you to choose a State.");
  });

  it("Verify Zip/Psotal code is required in your address area", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("The Zip/Postal code you've entered is invalid. It must follow this format: 00000");
  });

  it("Verify Zip/Psotal code is numeric with 5 characters and with format 00000 in your address area", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("The Zip/Postal code you've entered is invalid. It must follow this format: 00000");
  });

  it("Verify Zip/Psotal code is not allow to enter more than 5 characters in your address area", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("331093123");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("The Zip/Postal code you've entered is invalid. It must follow this format: 00000");
  });

  it("Verify Zip/Psotal code is not allow to enter less than 5 characters in your address area", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("3310");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("The Zip/Postal code you've entered is invalid. It must follow this format: 00000");
  });

  it("Verify Country is required in your address area", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.country.selectByVisibleText("-");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("id_country is required.");
  });

  it("Verify additional information is not allow to enter more than 300 characters", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.additionalInfo.setValue("TEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300CharacteresTEST300Characteres");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("other is too long. Maximum length: 300")
  });

  it("Verify Mobile phone field is required in your address area", () => {
    browser.url("");
    
    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("You must register at least one phone number.")
  });

  it("Verify Mobile is not allow to enter characters", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("asdawdasd");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("phone_mobile is invalid.")
  });

  it("Verify Home phone is not allow to enter characters", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phone.setValue("dadasdawdasd")
    createAccount.phoneMobile.setValue("15516123156");
    createAccount.submitBtnReg();

    expect(createAccount.alertText()).toEqual("phone is invalid.")
  });

  it("Verify behavior of register button", () => {
    browser.url("");

    NavSection.submitI();
    createAccount.email.setValue(getRandomEmail());
    createAccount.submitBtnCreate();
    createAccount.submitMr();
    createAccount.customerFirstName.setValue("Ignacio");
    createAccount.lastName.setValue("Carrizo");
    createAccount.passwordCreate.setValue("abc1234");
    createAccount.address.setValue("Alvear");
    createAccount.city.setValue("Rosario");
    createAccount.dropDown.selectByVisibleText("Arizona");
    createAccount.postCode.setValue("33109");
    createAccount.phoneMobile.setValue("3421323123");
    createAccount.submitBtnReg();
    const title = browser.getTitle();
    
    expect(title).toEqual("My account - My Store");
  });
});
