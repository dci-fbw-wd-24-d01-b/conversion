// Implizite Umwandlung von Strings zu Zahlen
console.log(1 * '3'); // 3
console.log(typeof (1 * '3')); // number
// "+" wandelt den String "3" implizit in die Zahl 3 um
console.log(typeof +'3'); // number

// Implizite Typumwandlung (type conversion) wird auch als Typenkonvertierung oder Zwangsumwandlung (type coercion) bezeichnet

// Explizite Umwandlung von Strings zu Zahlen mit
// - parseInt(): verwandelt String in ganze Zahl (Integer): 2, 3, 4
// - parseFloat(): verwandelt String in Kommazahl (floating point number), 2.34
// - Number()

// Explizite Umwandlung von Zahlen zu Strings mit
// - .toString()
let num = 10;
console.log('Der Typ ist', typeof num.toString());

// Umwandlung zu JSON (JavaScript Object Notation)
// JSON.stringify()
// JSON.parse()

let str = '3';
console.log(parseInt(str)); // die Zahl 3
console.log(typeof parseInt(str)); // number
console.log(parseInt('3.1')); // 3

console.log(parseFloat('3.9')); // 3.9

console.log(3 * 'John'); // NaN (NotANumber)
// '*' versucht, 'John' in eine Zahl umzuwandeln, aber es schlägt fehl
// Ergebnis: NaN
// (3 * NaN) ergibt NaN

// NaN ist vom Typ number
console.log(typeof NaN);

// NaN ist der einzige Wert, der nicht identisch mit sich selbst ist.
// Daher können wir sagen, dass ein Wert val NaN ist, wenn val === val
// false ergibt, oder
// val !== val true ergibt.
console.log(NaN === NaN); // false

// isNaN(x) bestimmt, ob ein Wert NaN ist, aber der Test ist nich zuverlässig
let myProduct = 3 * 'John'; // NaN
console.log('myProduct ist', myProduct); // NaN
console.log(isNaN(myProduct)); // true, aber:
console.log(isNaN('Hello')); // auch true
console.log(myProduct !== myProduct); // true; zuverlässiger Test. 

console.log(isNaN('Hello')); // true, aber 'Hello' ist ein String, nicht NaN, also ein falsches positives Ergebnis, unzuverlässiger Test

console.log(Number('2.9')); // 2.9
console.log(parseInt('2.9')); // 2

console.log(NaN + 10); // NaN ist 'ansteckend'; wenn ein Operand NaN ist, ergibt der gesamte Ausdruck NaN. 

// Vorsicht bei '==':
console.log('2' == 2); // true
console.log('2' === 2); // false




