/**
 * The function `reverse` computes the reversal
 * of a given `String` (don't copy-pasta!)
 *
 * @param {String} S to reverse
 * @return {String}
 * S is string, i is index, l is letter
 */
 //Rosa string to array .split()|reverse array .reverse()| to.string() Maybe???

function reverse(S){
  var l = ""
    for (var i = S.length-1; i >= 0; i--);
      l += S[i];
      return l
}

console.assert(reverse("") === ""); // Really?

console.assert(reverse("A") === "A"); // Jerk.

console.assert(reverse("cat") === "tac");

console.assert(reverse("ward") === "draw");

console.assert(reverse("books") === "skoob"); // Rokey, dokey...

console.assert(
  reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew"
);

/**
 * Function `encode` accepts a `String` and produces
 * the appropriate ROT13 "encoded" version, i.e. every
 * character in `phrase` is "rotated" ahead by 13 characters.
 *
 * @see String.prototype.charCodeAt
 * @see String.prototype.fromCharCode
 * @see http://en.wikipedia.org/wiki/ROT13
 *
 * // Start with just `phrase`...
 * @param {String} phrase to encode
 * // Add `N` in part 2!
 * // @param {Number} N rotation to apply, default 13
 * @return {String} encoded with ROT13
 */

 
// Rosa.arggggggggg no time no time to thinkkkkkk
var v
function encode(phrase, N ){
    for (var i = 0, L = ""; i<= phrase.length-1; i++){
      if (110>= phrase.charCodeAt(i)>=97){
        return phrase.charCodeAt(i) + N;
      } else {return phrase.charCodeAt(i) - N;
        }
      }
    L += phrase2.fromCharCode(v)
    return L
}

/**
 * Function `decode` accepts a `phrase` and `N` and
 * decoded it appropriately, i.e. every _word_ character
 * in `phrase` is rotated backward by `N` characters.
 *
 * @param {String} phrase to decode
 * @param {Number} N rotation to apply, default 13
 * @return {String} decoded by ROT-N
 */
function decode(phrase, N){
    // YOUR CODE HERE
}

// Produce more examples, please...
console.assert(encode("hello") === "uryyb");
console.assert(encode("uryyb") === "hello");

console.assert(encode("hello", 2) === "jgnnq")
console.assert(decode("jgnnq", 2) === "hello")
