var streamCtrl = function() {
  this.posts = ["hello"]
  console.log("works")
};


angular
  .module('strNet')
  .controller('streamCtrl', streamCtrl)