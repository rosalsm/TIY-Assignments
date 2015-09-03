var test = require('mocha').it,
  expect = require('chai').expect;

test('fromEnglish: "zero" through "nine"', function(){
  expect(fromEnglish).to.exist;
  expect(fromEnglish("zero")).to.equal(0);
  expect(fromEnglish("one")).to.equal(1);
  expect(fromEnglish("two")).to.equal(2);
  expect(fromEnglish("three")).to.equal(3);
  expect(fromEnglish("four")).to.equal(4);
  expect(fromEnglish("five")).to.equal(5);
  expect(fromEnglish("six")).to.equal(6);
  expect(fromEnglish("seven")).to.equal(7);
  expect(fromEnglish("eight")).to.equal(8);
  expect(fromEnglish("nine")).to.equal(9);
  // more tests here, please...
}); // END test(fromEnglish)

/**
 * @param {String} word representing an English number
 * @return {Number} value corresponding to `word`
 */
function fromEnglish(word){
  if (word==="zero"){
    console.log( 0);
  }
  if (word==="one"){
    console.log(1);
  }
  if (word==="two"){
    console.log(2);
  }
  if(word==="three"){
    console.log(3);
  }
  if (word==="four"){
    console.log(4);
  }
  if (word==="five"){
    console.log(5);
  }
  if (word==="six"){
    console.log(6);
  }
  if (word==="seven"){
    console.log(7);
  }
  if (word==="eight"){
    console.log (8);
  }
  if (word==="nine"){
    onsole.log (9);
  }
} // END fromEnglish

test('plus: ("zero", "zero") through ("zero", "nine")', function(){
  expect(plus).to.exist;
  expect(plus("zero", "zero")).to.equal(0);
  expect(plus("zero", "one")).to.equal(1); // change just one thing!
  expect(plus("zero", "two")).to.equal(2); // ha!
  // write more tests like those...
}); // END test(plus)

/**
 * @param {String} A representing an English number word
 * @param {String} B representing an English number word
 * @return {Number} the value of `A` added to `B`
 */
function plus(A, B){
  // write those tests first, please...
} // END plus

test('minus: ("zero", "zero") through ("zero", "nine")', function(){
  expect(minus).to.exist;
  expect(minus("zero", "zero")).to.equal(0);
  expect(minus("zero", "one")).to.equal(-1);
  // etc, etc, etc
}); // END test(minus)

// What about multiplication? Division? Exponents?
