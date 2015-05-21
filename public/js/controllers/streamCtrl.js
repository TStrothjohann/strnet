var streamCtrl = function(contentfulCard, torialCard) {
  this.posts = []
  this.posts.push(new contentfulCard)
  torialCard.get()




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