import createAccount from "../page-object/accountPage";
import NavSection from "../page-object/nav.section";
import getRandomEmail from "../utils/getRandomEmail";

describe("My account suite", () => {

  it('Verify "My Account" screen are displayed after create an account', () => {
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
