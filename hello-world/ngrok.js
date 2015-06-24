var ngrok = require('ngrok');

ngrok.connect(80, function (err, url) {
    site = url;
    console.log('serving your tunnel from: ' + site);
  });