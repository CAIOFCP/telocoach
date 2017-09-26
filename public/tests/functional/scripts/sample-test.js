module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('https://telocoach.mybluemix.net/')
      .waitForElementVisible('#telobtn', 60000, true,
        function(){}, 'Waiting for button Salario to become visible')
      .click('#telobtn')
      .waitForElementPresent('div.badges', 60000)
      .pause(5000)
      .end();
  }
};