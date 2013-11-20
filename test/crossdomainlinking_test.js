var _gaq = {push: function(){}};
(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  var pushedValue;

  module('jQuery#crossdomainlinking', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
      pushedValue = null;
      _gaq.push = function (url) {
        pushedValue = url;
      };
    }
  });

  test('is chainable', function() {
    strictEqual(this.elems.crossdomainlinking(), this.elems, 'should be chainable');
  });

  test('set up cross links', function() {
    var i, links, link;
    links = this.elems.find('a');
    this.elems.crossdomainlinking(['related']);
    for(i = 0; i <7; i++){
      links.eq(i).click();
      equal(pushedValue, null);
    }
    for(; i < 10; i++){
      link = links.eq(i);
      link.trigger("click");
      deepEqual(pushedValue, ['_link',link[0].href]);
    }
  });

  test('set up cross links with multiple domains', function() {
    var i, links, link;
    links = this.elems.find('a');
    this.elems.crossdomainlinking(['related','external']);
    for(i = 0; i <4; i++){
      links.eq(i).click();
      equal(pushedValue, null);
    }
    for(; i < 10; i++){
      link = links.eq(i);
      link.trigger("click");
      deepEqual(pushedValue, ['_link',link[0].href]);
    }
  });

  test('setting up cross links without domains parameter doesn\'t do anything', function() {
    var i, links;
    links = this.elems.find('a');
    this.elems.crossdomainlinking([]);
    for(i = 0; i <10; i++){
      links.eq(i).click();
      equal(pushedValue, null);
    }
  });

}(jQuery));
