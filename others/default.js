
// this file is used for spawning the server and navigating to the trading page.
export const before = (browser) => {
  const mainPage = browser.page.mainPage();
  //Open Main page
  mainPage.navigate().open();
};

export const beforeLogin = (browser) => {
  const mainPage = browser.page.mainPage();
  //Open Main page
  mainPage.login();
};

export const after = (browser) => {
  // End test
  browser.end();
};
