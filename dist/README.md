# js-lib

A set of JavaScript utils

## Install

```shell
npm i @smitch/js-lib
```

## Usage

In component:

```js
import { scrollTo } from "@smitch/js-lib";

scrollTo(id);
```

## Strings

**capitalize**  
Capitalize the first character of a string:

```js
import { capitalize } from "@smitch/js-lib";

capitalize("fRED"); // Fred
```

**camelCase**  
Camel case a string:

```js
import { camelCase } from "@smitch/js-lib";

camelCase("FRED flinstone"); // fredFlinstone
```

**snakeCase**  
Snake case a string:

```js
import { snakeCase } from "@smitch/js-lib";

snakeCase("FRED flinstone"); // fred_flinstone
```

**kebabCase**  
Kebab case a string:

```js
import { kebabCase } from "@smitch/js-lib";

kebabCase("FRED flinstone"); // fred-flinstone
```

**pascalCase**  
Pascal case a string:

```js
import { pascalCase } from "@smitch/js-lib";

pascalCase("FRED flinstone"); // Fred Flinstone
```

---

## Arrays

**removeDuplicates**  
Remove duplicates from array

```js
import { removeDuplicates } from "@smitch/js-lib";

removeDuplicates([4, 2, 3, 1, 4, 1, 2, 5, 3, 4]); // [ 4, 2, 3, 1, 5 ]
```

---

**filterObjects**  
Filter an array of objects

```js
import { filterObjects } from "@smitch/js-lib";

let wizards = [
  {
    name: "Radagast",
    spells: ["Talk to animals", "Make plants grow"],
    tool: "staff",
  },
  {
    name: "Merlin",
    spells: ["Dancing teacups", "Turn into fish"],
    tool: "wand",
  },
  {
    name: "Gandalf",
    spells: ["You shall not pass", "Disappear"],
    tool: "staff",
  },
];

// return all wizards whose 'tool' equals 'staff'
console.log(filterObjects(wizards, "tool", "staff"));
/*
[{
  name: "Radagast",
  spells: ["Talk to animals", "Make plants grow"],
  tool: "staff"
}, {
  name: "Gandalf",
  spells: ["You shall not pass", "Disappear"],
  tool: "staff"
}]
*/

// get all wizard names whose tool equals staff
console.log(filterObjects(wizards, "tool", "staff", "name"));
/*
["Radagast", "Gandalf"]
*/

// get all wizard names
console.log(filterObjects(wizards, "name"));
/*
["Radagast", "Merlin", "Gandalf"]
*/
```

**mergeArrays**  
Merge multiple arrays

```js
let spells = [
  ["Talk to animals", "Make plants grow"],
  ["Dancing teacups", "Turn into fish", "Talk to animals"],
  ["You shall not pass", "Disappear"],
];

console.log(mergeArrays(spells));
// ["Talk to animals", "Make plants grow", "Dancing teacups", "Turn into fish", "Talk to animals", "You shall not pass", "Disappear"]

// remove duplicates
console.log(mergeArrays(spells, true));
// ["Talk to animals", "Make plants grow", "Dancing teacups", "Turn into fish", "You shall not pass", "Disappear"]
```

---

## UI

**scrollTo**  
Scroll to top of element (id).

```js
import { scrollTo } from "@smitch/js-lib";

scrollTo(id);
```

**scrollToBottom**  
Scroll to bottom of element (id).

```js
import { scrollToBottom } from "@smitch/js-lib";

scrollToBottom(id);
```

**randomColor**  
Returns a random color (hex, rgb, hsl).

```js
import { randomColor } from "@smitch/js-lib";

console.log(randomColor()); // returns hex color (#fc90ec)
console.log(randomColor("hex")); // returns hex color (#fc90ec)
console.log(randomColor("rgb")); // returns rgb color (rgb(119,73,119))
console.log(randomColor("hsl")); // returns hsl color (hsl(299, 50%, 50%))
```

---

## Maths

**formatNumber**  
Format a number with language-sensitive formatting.

```js
import { formatNumber } from "@smitch/js-lib";

const number = 123876456.789;

console.log(formatNumber(number)); // format based on user's device

console.log(formatNumber(number, "de-DE")); // "123.876.456,789"
console.log(formatNumber(number, "es-ES")); // "123.876.456,789"
console.log(formatNumber(number, "ar-EG")); // "١٢٣٬٨٧٦٬٤٥٦٫٧٨٩"
console.log(formatNumber(number, "fr-FR")); // "123 876 456,789"
```

**formatDecimals**  
Format decimal places. Default is 2.

```js
import { formatDecimals } from "@smitch/js-lib";

formatDecimals(99); // 99.00
formatDecimals(9934.7645, 0); // 9935
formatDecimals(9934.7645, 6); // 9934.764500
```

**randomNumber**  
Generate a random number.

```js
import { randomNumber } from "@smitch/js-lib";

console.log("randomNumber max = default = 100", randomNumber());
console.log("randomNumber max = 10", randomNumber(10));
console.log("randomNumber max = 100", randomNumber(100));
console.log("randomNumber max = 1000", randomNumber(1000));
console.log("randomNumber max = 1000000000", randomNumber(1000000000));
console.log("randomNumber max = 255", randomNumber(255));
```

**geoDistance**  
Find the distance between 2 geo locations (miles, km, nautical miles).

```js
import { geoDistance } from "@smitch/js-lib";

/* London (51.5072, 0.1276) to New York (40.7128, 74.006) */
console.log("geoDistance", geoDistance(51.5072, 0.1276, 40.7128, 74.006)); // 3461.021586418985 miles
console.log("geoDistance", geoDistance(51.5072, 0.1276, 40.7128, 74.006, "km")); // 5569.9743239738755 km
console.log(
  "geoDistance",
  geoDistance(51.5072, 0.1276, 40.7128, 74.006, "nautical")
); // 3005.5511456462464 nautical miles
```

**round**  
Round number to nearest integer.

```js
import { round } from "@smitch/js-lib";

console.log("round", round(51.5072)); // 52
```

**roundUp**  
Round UP number to nearest integer.

```js
import { roundUp } from "@smitch/js-lib";

console.log("round", roundUp(51.5072)); // 52
```

**roundDown**  
Round DOWN number to nearest integer.

```js
import { roundDown } from "@smitch/js-lib";

console.log("round", roundDown(51.5072)); // 51
```

**formatCurrency**  
Format currency with symbol, code, or name.

```js
import { formatCurrency } from "@smitch/js-lib";

console.log(formatCurrency(99, "GBP")); // £99.00
console.log(formatCurrency(99, "GBP", "code")); // GBP 99.00
console.log(formatCurrency(99, "GBP", "name")); // 99.00 British pounds
```

---

## Date

**formatDate**  
Format a date.

```js
import { formatDate } from "@smitch/js-lib";

const date = new Date("2023-12-03");

console.log(formatDate(new Date(), "en-GB", "day dd/mm/yyyy")); // "Monday, 13/02/2023"
console.log(formatDate(new Date(), "en-GB", "dd month yyyy")); // "13 February 2023"
console.log(formatDate(new Date(), "en-GB", "day dd month yyyy")); // "Monday, 13 February 2023"
console.log(formatDate(new Date(), "en-GB", "dd/mm/yyyy")); // "13/02/2023"

console.log(formatDate(new Date(), "ru", "day dd/mm/yyyy")); // "понедельник, 13.02.2023 г."
console.log(formatDate(new Date(), "ar-EG", "dd month yyyy")); // "١٣ فبراير ٢٠٢٣"
console.log(formatDate(date, "es", "day dd month yyyy")); // "domingo, 3 de diciembre de 2023"
console.log(formatDate(new Date(), "en-US", "dd/mm/yyyy")); // "2/13/2023"
```
