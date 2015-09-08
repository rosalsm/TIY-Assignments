
var expect = require ('chai').expect;

it('should identify vowels', function(){

 /**
 * input  |  output
 * "a"        true
 * "A"        true
 *  0         false
 *  "b"       false
 */

 expect(true).to.be.true;
 expect(isVowel).to.be.a('function');
 expect(isVowel('a') ).to.be.true;
 expect(isVowel('b') ).to.be.false;
 expect(isVowel(0) ).to.be.false;
 expect(isVowel('A') ).to.be.true;

});

function isVowel (char){
  if (char === 'a'){
    return true;
  }
  return false;
  //we don't need to add else for now (two options )
}
