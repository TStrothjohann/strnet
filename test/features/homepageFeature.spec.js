describe('Str.net', function() {
  
  beforeEach( function() {
    browser.get('http://localhost:3000');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Thomas Strothjohann');
  });

  it('displays my newest contentful post', function(){
    expect(element.all(by.repeater('post in stream.posts')).count()).toEqual(1)
  });

  
});