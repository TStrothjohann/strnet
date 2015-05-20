describe("contentfulCard", function() {
  var contentfulCard;

  beforeEach(module("strNet"));
  beforeEach(function(){
    inject(function($injector) {
      contentfulCard = $injector.get("contentfulCard");
    });
  })

  beforeEach(
    inject(
      function($httpBackend) {
        httpBackend = $httpBackend;
        httpBackend
          .when("GET", "https://cdn.contentful.com:443/spaces/9bkibwaoaudw/entries?access_token=da440bd5e492839677d0438f2f99037582241b51d2f44d35cb860ad1916b1398&content_type=2wKn6yEnZewu2SCCkus4as")
          .respond(json), //sample response from test/testjson.js
        httpBackend
          .when("GET", "https://cdn.contentful.com:443/spaces/9bkibwaoaudw/assets/3S1ngcWajSia6I4sssQwyK?access_token=da440bd5e492839677d0438f2f99037582241b51d2f44d35cb860ad1916b1398")
          .respond(jsonPhoto) //stubbed response for photo
  }));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

  describe("gets content space and handles...", function(){
    beforeEach(function(){
      testCard = new contentfulCard();
      httpBackend.flush();     
    });
      
    it("title of post", function(){
      expect(testCard.title).toEqual("Seven Tips From Ernest Hemingway on How to Write Fiction")
    });

    it("text of post", function(){
      expect(testCard.text).toEqual(json.items[0].fields.body)
    });

    it("photo of post", function(){
      expect(testCard.photo).toEqual(jsonPhoto.fields.file.url)
    });


  });

});