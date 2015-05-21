angular
  .module('strNet', ['contentful', 'ngResource'])
  .config(function(contentfulProvider){
    contentfulProvider.setOptions({
        space: '9bkibwaoaudw',
        accessToken: 'da440bd5e492839677d0438f2f99037582241b51d2f44d35cb860ad1916b1398'
    });
  });