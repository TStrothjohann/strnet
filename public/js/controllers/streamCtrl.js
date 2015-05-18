var streamCtrl = function(contentfulCard) {
  this.posts = []
  this.posts.push(new contentfulCard)

  // this.getContentfulPosts = function(number){
  //   if(number === undefined){number = 1}
  //   for (var i = 0; i = number; i++) {
  //      this.posts.push(new contentfulCard(i))
  //   }; 
  // };
};


angular
  .module('strNet')
  .controller('streamCtrl', streamCtrl)