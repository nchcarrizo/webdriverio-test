class OrderHistory {
  get btnOrderDetails() {
    return $("=ORDER HISTORY AND DETAILS");
  }
  btnOrderDetailsClick() {
    this.btnOrderDetails.click();
  }
}
export default new OrderHistory();
