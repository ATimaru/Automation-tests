//test.js
describe('Protractor Test', function() {
  it('goes to draw.io', () => {
   browser.waitForAngularEnabled(false);
   browser.get('https://www.draw.io');
    var decideLater = element(by.css('body > div.geDialog > div > div:nth-child(3)'));
    decideLater.click();
    browser.sleep(1000);
    var editDataButton = element(by.css('body > div.geSidebarContainer.geFormatContainer > div > div:nth-child(5) > button:nth-child(1)'));
    editDataButton.click();
    browser.sleep(1000);
    var inputField = element(by.css('body > div.geDialog > div > div:nth-child(1) > div > input[type="text"]'));
    inputField.sendKeys('abc');
    browser.sleep(1000);
    var addPropertyButton = element(by.css('body > div.geDialog > div > div:nth-child(1) > div > button'));
    addPropertyButton.click();
    browser.sleep(1000);
    var rightBox1 = element(by.css('body > div.geDialog > div > div:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(2) > div > textarea'));
    rightBox1.sendKeys(100);
    browser.sleep(1000);
    var enterPnameInput = element(by.css('body > div.geDialog > div > div:nth-child(1) > div > input[type="text"]'));
    enterPnameInput.sendKeys('xyz');
    addPropertyButton.click();
    browser.sleep(1000);
    var rightBox2 = element(by.css('body > div.geDialog > div > div:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(2) > div > textarea'));
    rightBox2.sendKeys(200);
    browser.sleep(1000);
    var applyButton = element(by.className('geBtn gePrimaryBtn'));
    applyButton.click();
    browser.sleep(1000);
  });
});
