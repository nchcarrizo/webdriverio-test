function getRandomEmail() {
  const a = Math.trunc(Math.random() * 1000000);
  return "test" + a + "@gmail.com";
}
export default getRandomEmail;
