var torialCardWrapper = function (googleFeeds, $sanitize) {
  var torialCard = function(index){
    if(index === undefined){index = 0}
    var self = this
    this.initialize = function() {
      var feedSource = {title: 'Slashdot', url: 'https://www.torial.com/thomas.strothjohann.atom'};
      googleFeeds.fetch({q: feedSource.url, num: 20}, {}, function (data) {
      
      self.textHTML = data.responseData.feed.entries[index].content
      
      self.link = data.responseData.feed.entries[index].link
      self.title = data.responseData.feed.entries[index].title
      self.date = new Date(data.responseData.feed.entries[index].publishedDate).toDateString();
      self.author = data.responseData.feed.entries[index].author
        
      });
    };
    this.initialize();
  };
  return torialCard
}


angular
  .module("strNet")
  .factory('torialCard', torialCardWrapper)