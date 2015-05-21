var torialCardWrapper = function (googleFeeds) {
    this.get = function() {
      var torialContent
      var feedSource = {title: 'Slashdot', url: 'https://www.torial.com/thomas.strothjohann.atom'};
        googleFeeds.fetch({q: feedSource.url, num: 10}, {}, function (data) {
         torialContent = data.responseData.feed
         return torialContent;
        });
    };
  }


angular
  .module("strNet")
  .service('torialCard', torialCardWrapper)