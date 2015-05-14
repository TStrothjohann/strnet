exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./test/features/*.js'],
  multiCapabilities: [{
    browserName: 'chrome'
  }]
}