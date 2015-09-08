var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc


test(multOf3s, function(){
  expect(multOf3s(5)).to.equal(3);
  expect(multOf3s(6)).to.equal(9);
  expect(multOf3s (10)).to.equal(18);
  expect(multOf3s (12)).to.equal(30);
  expect(multOf3s (0)).to.equal(0);
  expect(multOf3s (20)).to.equal(63);

}); // END test 3s
// function for sum of multiples of 3
//parameter N is a Number
// var sum is a number and var n
//returns a number

function multOf3s (N){
  var sum = 0, n = 0;
  for (n=0; n<=N; n++){
    if (n % 3 === 0){
      sum += n;
    }
  }
  return sum;
}

test(multOf5s, function(){
  expect(multOf5s(5)).to.equal(5);
  expect(multOf5s(6)).to.equal(5);
  expect(multOf5s (10)).to.equal(15);
  expect(multOf5s (12)).to.equal(15);
  expect(multOf5s (0)).to.equal(0);
  expect(multOf5s (20)).to.equal(50);
  expect(multOf5s (50)).to.equal(275);
  expect(multOf5s (1000)).to.equal(100500);

});

function multOf5s (N){
  var sum = 0, n = 0;
  for (n=0; n<=N; n++){
    if (n % 5 === 0){
      sum += n;
    }
  }
  return sum;
}

test(multOf3s5s, function(){
  expect(mult3s5s(5)).to.equal(8);
  expect(mult3s5s(10)).to.equal(33);
  expect(mult3s5s(12)).to.equal(45);
  expect(mult3s5s(15)).to.equal(60);
  expect(mult3s5s(0)).to.equal(0);
  expect(mult3s5s(20)).to.equal(98);
  expect(mult3s5s(50)).to.equal(593);
});


function multOf3s5s (N){
  var sum = 0, n = 0
  for (n=0; n<=N; n++){
    if (n % 3 === 0 || n % 5 === 0){
      sum += n;
    }
  }
  return sum
}
