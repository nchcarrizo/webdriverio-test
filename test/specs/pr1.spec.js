import LoginPage from "../page-object/auth.page";
import NavSection from "../page-object/nav.section";

describe("first suite", () => {

  it("Verify functionality of the breadcrumb", () => {
    browser.url("");
    
    NavSection.submitI();
    LoginPage.breadCrumbClick();
    const title = browser.getTitle();

    expect(title).toEqual("My Store");
  });

  it("Verify Log in with incorrect values", () => {
    browser.url("");

    NavSection.submitI();
    LoginPage.username.setValue("adelquisw1231trinidad@endava.com");
    LoginPage.password.setValue("abc12kwda3");
    LoginPage.submit();

    expect(LoginPage.alertText()).toEqual("Authentication failed.");
  });

  it("Verify email address field is required", () => {
    browser.url("");

    NavSection.submitI();
    LoginPage.password.setValue("abc123");
    LoginPage.submit();

    expect(LoginPage.alertText()).toEqual("An email address required.");
  });

  it("Verify email address format validation", () => {
    browser.url("");

    NavSection.submitI();
    LoginPage.username.setValue("adelquis.trinidadendavacom");
    LoginPage.submit();

    expect(LoginPage.alertText()).toEqual("Invalid email address.");
  });

  it("Verify password field is required", () => {
    browser.url("");

    NavSection.submitI();
    LoginPage.username.setValue("adelquis.trinidad@endava.com");
    LoginPage.submit();

    expect(LoginPage.alertText()).toEqual("Password is required.");
  });

  it("Verify correct authentication behavior of existing user", () => {
    browser.url("");

    NavSection.submitI();
    LoginPage.username.setValue("adelquis.trinidad@endava.com");
    LoginPage.password.setValue("abc123");
    LoginPage.submit();
    const title = browser.getTitle();
    
    expect(title).toEqual("My account - My Store");
  });
});
