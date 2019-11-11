import NavSection from "../page-object/nav.section";
import OrderHistory from "../page-object/orderHistoryElems";
import LoginPage from "../page-object/auth.page";

describe("Order History Suite", () => {

  it("Verify the client is able to access to order history page", () => {
    browser.url("");

    NavSection.submitI();
    LoginPage.username.setValue("adelquis.trinidad@endava.com");
    LoginPage.password.setValue("abc123");
    LoginPage.submit();
    OrderHistory.btnOrderDetailsClick();
    const title = browser.getTitle();
    
    expect(title).toEqual("Order history - My Store");
  });
});
