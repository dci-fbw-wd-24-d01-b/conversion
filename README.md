# Type Conversion and Comparison in JavaScript

JavaScript allows you to convert between data types in several ways. Here's an overview:

## Converting to String

To convert values to strings, you can use the `String()` function or the `.toString()` method on most data types.

```javascript
console.log(String(-5.123)); // "-5.123"
console.log(String(false)); // "false"
```

## Converting to Number

To convert values to numbers, you can use the `Number()` function or methods like `parseInt()` and `parseFloat()`. Note that `Number()` attempts to convert any value to a number, while `parseInt()` and `parseFloat()` are designed to parse strings into numbers.

```javascript
console.log(Number("61")); // 61
console.log(Number(true)); // 1
console.log(parseInt("61")); // 61
console.log(parseFloat("61.5")); // 61.5
```

## Converting to Boolean

To convert values to boolean, use the `Boolean()` function. This conversion respects truthy and falsy values.

```javascript
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
```

## NaN and `typeof NaN`

`NaN` stands for "Not a Number" and occurs when you try to perform a mathematical operation with incompatible types. `NaN` is of type `number` but has unique properties, like being the only value not equal to itself.

```javascript
console.log(0 / 0); // NaN
console.log(typeof NaN); // "number"
```

## Assigning Fallback Values with `||`

The logical OR operator (`||`) can be used to assign fallback values. If the first operand is falsy, it returns the second operand, which can be useful for setting default values.

```javascript
let name = ""; // falsy
let greeting = name || "Guest"; // "Guest" is the default
console.log(greeting); // "Guest"
```

## Difference Between `==` and `===`

- `==`: This is the loose equality operator, allowing type coercion. It compares values after converting them to a common type.
- `===`: This is the strict equality operator, which checks both type and value. It doesn't allow type coercion.

```javascript
console.log(1 == "1"); // true (loose equality)
console.log(1 === "1"); // false (strict equality)

console.log(null == undefined); // true
console.log(null === undefined); // false
```
