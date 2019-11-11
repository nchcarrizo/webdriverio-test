class NavSection {
  get submitBtn() {
    return $(".login");
  }
  submitI() {
    this.submitBtn.click();
  }
}
export default new NavSection();
