describe("ContentfulCard", function() {
  var ContentfulCard;

  beforeEach(module("strNet"));
  beforeEach(function(){
    inject(function($injector) {
      ContentfulCard = $injector.get("ContentfulCard");
    });
  })

  beforeEach(
    inject(
      function($httpBackend) {
        httpBackend = $httpBackend;
        httpBackend
          .when("GET", "https://cdn.contentful.com/spaces/9bkibwaoaudw")
          .respond(
            {
              "sys": {
                "type": "Entry",
                "id": "nyancat"
              },
              "fields": {
                "name": "Nyan Cat"
              }
            }
          )
        }
    )
  );

  it("handles content from Contentful space", function(){
    var url = 'https://cdn.contentful.com/spaces/9bkibwaoaudw'
    testCard = new ContentfulCard()
    httpBackend.flush();
    expect(testCard.title).toEqual("Huhu World")
  });
});
