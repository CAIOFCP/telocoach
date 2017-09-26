module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('https://telocoach.mybluemix.net/')
      .waitForElementVisible('input.gsfi', 60000, true,
        function(){}, 'Waiting for Search Input to become visible')
      .setValue('input.gsfi', 'Test')
      .waitForElementPresent('#search-page', 60000)
      .pause(5000)
      .end();
  }
};