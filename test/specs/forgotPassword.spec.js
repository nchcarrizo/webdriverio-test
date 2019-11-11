import NavSection from "../page-object/nav.section";
import ForgotPassword from "../page-object/forgotYourPassword";
import forgotYourPassword from "../page-object/forgotYourPassword";
import LoginPage from "../page-object/auth.page";

describe("Forgot Password suit", () => {

  it("Verify forgot your password tittle is displayed when the user clicks on forgot your password link", () => {
    browser.url("");

    NavSection.submitI();
    ForgotPassword.submitForgot();

    expect(ForgotPassword.titleForgotPass()).toEqual("FORGOT YOUR PASSWORD?");
  });

  it("Verify the validation message when the user enters an invalid email", () => {
    browser.url("");
    
    NavSection.submitI();
    ForgotPassword.submitForgot();
    ForgotPassword.emailForgot.setValue("pepe123453.cpm");
    forgotYourPassword.btnRetrieveClick();

    expect(LoginPage.alertText()).toEqual("Invalid email address.");
  });

  it("Verify validation message when the user enters unexisting email", () => {
    browser.url("");

    NavSection.submitI();
    ForgotPassword.submitForgot();
    ForgotPassword.emailForgot.setValue("testpepe123453@gmail.com");
    forgotYourPassword.btnRetrieveClick();

    expect(LoginPage.alertText()).toEqual(
      "There is no account registered for this email address."
    );
  });

  it("Verify behavior for retrieve password button", () => {
    browser.url("");

    NavSection.submitI();
    ForgotPassword.submitForgot();
    ForgotPassword.emailForgot.setValue("adelquis.trinidad@endava.com");
    forgotYourPassword.btnRetrieveClick();
    
    expect(ForgotPassword.alertSuccess.getText()).toEqual(
      "A confirmation email has been sent to your address: adelquis.trinidad@endava.com"
    );
  });
});
