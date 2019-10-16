import { Builder, By, until } from "selenium-webdriver";
import "selenium-webdriver/chrome";
import "chromedriver";
import webdriver from "selenium-webdriver";

const rootURL = "https://jsonplaceholder.typicode.com/";
let driver;
const getElemntByClassName = async (driver, className, timeout = 2000) => {
  const el = await driver.wait(
    until.elementLocated(By.className(className)),
    timeout
  );
  return await driver.wait(until.elementIsVisible(el), timeout);
};

beforeEach(done => {
  const chromeCapabilities = webdriver.Capabilities.chrome();
  chromeCapabilities.set("chromeOptions", {
    args: ["--headless", "--disable-gpu"]
  });
  driver = new Builder()
    .forBrowser("chrome")
    .withCapabilities(chromeCapabilities)
    .build();
  driver.get(rootURL).then(done);
});

afterEach(done => {
  driver.quit().then(done);
});

it("find the text", async () => {
  const el = await getElemntByClassName(driver, "subtitle");
  const text = await el.getText();
  expect(/fake/gi.test(text)).toBeTruthy();
});
