# Typumwandlung und Vergleich in JavaScript

JavaScript ermöglicht es, zwischen verschiedenen Datentypen zu konvertieren. Hier ist ein Überblick:

## Umwandlung in String

Um Werte in Strings umzuwandeln, kann man die Funktion `String()` oder die Methode `.toString()` auf den meisten Datentypen verwenden.

```javascript
console.log(String(-5.123)); // "-5.123"
console.log(String(false)); // "false"
```

## Umwandlung in Zahl

Um Werte in Zahlen umzuwandeln, kann man die Funktion `Number()` oder Methoden wie `parseInt()` und `parseFloat()` verwenden. Bitte beachten, dass `Number()` versucht, jeden Wert in eine Zahl zu konvertieren, während `parseInt()` und `parseFloat()` darauf ausgelegt sind, Zeichenketten in Zahlen zu parsen.

```javascript
console.log(Number("61")); // 61
console.log(Number(true)); // 1
console.log(parseInt("61")); // 61
console.log(parseFloat("61.5")); // 61.5
```

## Umwandlung in Boolean

Um Werte in Boolean umzuwandeln, verwendet man die Funktion `Boolean()`. Diese Umwandlung respektiert truthy- und falsy-Werte.

```javascript
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
```

## NaN und `typeof NaN`

`NaN` steht für "Not a Number" und tritt auf, wenn man versucht, eine mathematische Operation mit inkompatiblen Typen durchzuführen. `NaN` ist vom Typ `number`, hat jedoch einzigartige Eigenschaften, wie zum Beispiel die Tatsache, dass es der einzige Wert ist, der nicht gleich sich selbst ist.

```javascript
console.log(0 / 0); // NaN
console.log(typeof NaN); // "number"
```

## Zuweisung von Standardwerten mit `||`

Der logische ODER-Operator (`||`) kann verwendet werden, um Standardwerte zuzuweisen. Wenn der erste Operand falsy ist, wird der zweite Operand zurückgegeben, was nützlich ist, um Standardwerte zu setzen.

```javascript
let name = ""; // falsy
let greeting = name || "Guest"; // "Guest" ist der Standardwert
console.log(greeting); // "Guest"
```

## Unterschied zwischen `==` und `===`

- `==`: der lockere Gleichheitsoperator, der Typumwandlung zulässt. Er vergleicht Werte, nachdem sie in einen gemeinsamen Typ konvertiert wurden.
- `===`: der strenge Gleichheitsoperator, der sowohl Typ als auch Wert überprüft. Er erlaubt keine Typumwandlung.

```javascript
console.log(1 == "1"); // true (lockere Gleichheit)
console.log(1 === "1"); // false (strenge Gleichheit)

console.log(null == undefined); // true
console.log(null === undefined); // false
```
