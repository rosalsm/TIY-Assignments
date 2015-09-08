var text = require('mocha').it,
  expects = require('chai').expect;

test('fibonacci', function(){
  expect(fibonacci(1)).to.be.equal([ 1 ]);
  expect(fibonacci(2)).to.be.equal([ 1, 2 ]);
  expect(fibonacci(3)).to.be.equal([ 1, 2, 3 ]);
  expect(fibonacci(4)).to.be.equal([1, 2, 3, 5 ]);
  expect(fibonacci(5)).to.be.equal([ 1, 2, 3, 5, 8 ]);
  expect(fibonacci(6)).to.be.equal([ 1, 2, 3, 5, 8, 13 ]);
  expect(fibonacci(7)).to.be.equal([ 1, 2, 3, 5, 8, 13, 21 ]);
  expect(fibonacci(8)).to.be.equal([ 1, 2, 3, 5, 8, 13, 21, 34 ]);
  expect(fibonacci(9)).to.be.equal([ 1, 2, 3, 5, 8, 13, 21, 34, 55 ]);
  expect(fibonacci(10)).to.be.equal([ 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]);
  // ...ad nauseum.
  });

  function fibonacci(N){
    var i, fib=[];
    fib[0]=1;
    fib[1]=2;
    for (i=2; i<N; i++){
      fib[i]=fib[i-1]+fib[i-2];
    }
    return fib
  }

/* Rosa. It is not very clear to me the meaning of even value.
I assume we refer to the arrys created by term 2, term 4,
term 6, etc.*/


test('evens', function(){
  expect(evens(2).to.be.equal([1, 2 ]);
  expect(evens(4).to.be.equal([1, 2, 3, 5]);
  expect(evens(6).to.be.equal([1, 2, 3, 5, 8, 13 ]);
  expect(evens(8).to.be.equal([1, 2, 3, 5, 8, 13, 21, 34]);
  expect(evens(10).to.be.equal([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
}); // END test(evens)

function evens(N){
  if (N % 2 === 0){
    var i, fib=[];
    fib[0]=1;
    fib[1]=2;
    for (i=2; i<N; i++){
      fib[i]=fib[i-1]+fib[i-2];
    }
    return fib
  }
}



test('sumList', function(){
  assert.equal(sumList([ ]), 0);
  assert.equal(sumList([ 1 ]), 1);
  assert.equal(sumList([ 1, 2 ]), 3);
  // ...et cetera, et cetera, et cetera.
}); // END test(sum)

// Rosa. Just crazyyyyyyyy talk

Function sumList (){
  var i , sum = 0, fib = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89] ;
  for (i=0; i< (fib.length-1); i++){
      sum += fib[i];
  }
    return sum
}
/*fib = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

  for (var i=0, sum=0; i< (fib.length-1); i++){
      sum += fib[i];
  }
     sum;

     Rosa. This one works!!!!!!!!!!!!!*/


test('summing even Fibonacci numbers?', function(){
  expect( sum(evens(fibonacci(0))) ).to.equal(FILL_ME_IN); // nice.
  // There really should be more code in here...
}); // END test(dat CHAIN tho)
