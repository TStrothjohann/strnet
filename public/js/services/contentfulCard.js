var contentfulCardWrapper = function(contentful){
  var contentfulCard = function(index){
    if(index === undefined){index = 0}
    this.initialize = function(){
      var self = this;
      contentful.entries({content_type: "2wKn6yEnZewu2SCCkus4as"}).then(function(response){
        self.title = response.data.items[index].fields.name
        self.date = new Date(response.data.items[index].fields.date).toDateString();
        self.text = response.data.items[index].fields.body
        // self.author = response.data.items[index].fields.author[0].fields.name
        // contentful.asset(response.data.items[index].fields.featuredImage.sys.id).then(function(asset){
        //   self.photo = asset.fields.file.url
        // });
      },
      // Error handler
      function(response){
        console.log('Oops, error ' + response.status);
      });
    };
    this.initialize();
  };
  
  return (contentfulCard);
};

angular
  .module('strNet')
  .factory('contentfulCard', contentfulCardWrapper)