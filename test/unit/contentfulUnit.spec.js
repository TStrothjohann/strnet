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
          .when("GET", "https://cdn.contentful.com:443/spaces/9bkibwaoaudw/entries?access_token=da440bd5e492839677d0438f2f99037582241b51d2f44d35cb860ad1916b1398")
          .respond()
  }));

  it("handles content from Contentful space", function(){
    testCard = new contentfulCard();
    httpBackend.flush();
    expect(testCard.title).toEqual("Nyan Cat")
  });
});


