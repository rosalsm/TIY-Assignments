
// Put `items.json` in your `APIGymnastics` directory...
var items = require('items.json');

// TODO: Setup mocha and chai...

//test('this is the easy one', function(){
  expect(Array.isArray(items)).to.be.true; // What.
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

  expect(items.length).to.equal(25); // It's haunting me now...
});


/* I think Items.json contains an array and inside there is
another array with different contents as price, listing ID, title, category, etc.
Every time you want to call the array in a particular index you can get another array
with the elements of this index of all items. */


test('finding the average price', function(){
  var averagePrice = "start with `items`; use `Array` methods";

  expect(averagePrice).to.be.closeTo(23.63, 0.01);
});



Function FindingAvPrice (items){
  var sum = 0, n=0
  for (items["price"])
}

test('finding that perfect $15 item', function(){
  /**
   * @param {Array} items to search through
   * @return {Array} of `items` with `price` between `min` and `max` USD
   */
  function pricedBetween(items, min, max){
    var min = 14, max = 18
     for (min<= items["price"] <= max){
    }
  }
  var filetered = items ["price"].pricedBetween




  expect( pricedBetween(items, 14, 18) ).to.deep.equal([
    // Can you find their names _without_ code first?
  ]);
});

test('pond hopping', function(){
  expect( /* your answer */ ).to.deep.equal({
    name: "1970s Schlitz Malt Liquor Glass Beer Pitcher",
    price: 18.00
  });
});

test('just wood or _reclaimed_ wood?', function(){
  var actual = wooden(items); // Who defined `wooden`...? Oh.

  expect( actual ).to.deep.equal( /* an Array of String names... */ );
});

test('this is just SEO bait, I know it...', function(){
  var actual = octomatter(items); // Just one way to do it... Plus, "octomatter"!

  expect(actual).to.deep.equal(/* Look, I can't do _everything_ for you! */);
});

test('true craftsmen... women... people. Birds?', function(){
  expect(makerSellers(items)).to.equal(18);
});
