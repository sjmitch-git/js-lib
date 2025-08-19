# js-lib

A lightweight, modern JavaScript utility library designed to simplify common tasks in string
manipulation, array processing, UI interactions, mathematical operations, and date formatting. Built
for developers who need reliable, easy-to-use functions for web and Node.js applications **js-lib**
offers a robust set of tools with a focus on performance and simplicity.

## Features

- **String Manipulation:** Transform strings with ease using functions like `capitalize`,
  `camelCase`, `snakeCase`, `kebabCase`, `pascalCase`, `slugify`, and more.`
- **Object Manipulation**: Manage objects with utilities like `deepClone` for immutable copies and
  `pick` for selecting specific properties.
- **Array Utilities:** Efficiently manage arrays with `removeDuplicates`, `filterObjects`,
  `mergeArrays`, and `shuffleArray`.
- **UI Helpers:** Enhance user experience with smooth scrolling (`scrollTo`, `scrollToBottom`) and
  dynamic color generation (`randomColor`).
- **Maths Operations:** Format numbers, currencies with `formatNumber`, `formatCurrency`, and
  precise rounding functions.
- **Geo Operations**: Calculate distances, centroids, bearings, directions, and proximity with
  `geoDistance`, `geoMidpoint`, `geoBearing`, `geoDirection`, and `isWithinRadius`.
- **Date Formatting:** Handle dates effortlessly with `formatDate` for locale-specific formatting
  and `currentTime` for timezone-aware time retrieval.
- **TypeScript Support:** Fully typed for seamless integration in TypeScript projects.
- **Zero Dependencies:** Lightweight and dependency-free for minimal bundle size.
- **CI/CD Tested:** Rigorously tested with Jest and published to npm via GitHub Actions.

## Installation

Install `js-lib` via npm:

```shell
npm i @smitch/js-lib
```

## Usage

Import and use the utilities in your JavaScript or TypeScript project:

```js
import { scrollTo, capitalize } from "@smitch/js-lib";

// Scroll to an element by ID
scrollTo("my-element");

// Capitalize a string
console.log(capitalize("fRED")); // "Fred"
```

## API Reference

### Strings

**capitalize** Capitalize the first character of a string:

```js
import { capitalize } from "@smitch/js-lib";

capitalize("fRED"); // Fred
```

**camelCase** Camel case a string:

```js
import { camelCase } from "@smitch/js-lib";

camelCase("FRED flinstone"); // fredFlinstone
```

**snakeCase** Snake case a string:

```js
import { snakeCase } from "@smitch/js-lib";

snakeCase("FRED flinstone"); // fred_flinstone
```

**kebabCase** Kebab case a string:

```js
import { kebabCase } from "@smitch/js-lib";

kebabCase("FRED flinstone"); // fred-flinstone
```

**pascalCase** Pascal case a string:

```js
import { pascalCase } from "@smitch/js-lib";

pascalCase("FRED flinstone"); // FredFlinstone
```

**slugify** Create URL-friendly slugs:

```js
import { slugify } from "@smitch/js-lib";

slugify("FRED flinstone!"); // "fred-flinstone"
slugify("FRED flinstone!", { separator: "_" }); // "fred_flinstone"
```

**sentenceCase** Capitalize the first word of a string, leaving others unchanged:

```js
import { sentenceCase } from "@smitch/js-lib";

sentenceCase("fRED flinstone"); // "FRED flinstone"
sentenceCase("hello WORLD"); // "Hello WORLD"
```

**upperCaseWords** Convert all words to uppercase, preserving separators:

```js
import { upperCaseWords } from "@smitch/js-lib";

upperCaseWords("fred flinstone"); // "FRED FLINSTONE"
upperCaseWords("fred-flinstone", { separator: "-" }); // "FRED-FLINSTONE"
```

**lowerCaseWords** Convert all words to lowercase, preserving separators:

```js
import { lowerCaseWords } from "@smitch/js-lib";

lowerCaseWords("FRED FLINSTONE"); // "fred flinstone"
lowerCaseWords("FRED-FLINSTONE", { separator: "-" }); // "fred-flinstone"
```

**toggleCase** Invert the case of each letter in a string:

```js
import { toggleCase } from "@smitch/js-lib";

toggleCase("Hello World"); // "hELLO wORLD"
toggleCase("fRED"); // "Fred"
```

**dotCase** Convert a string to dot.case:

```js
import { dotCase } from "@smitch/js-lib";

dotCase("FRED flinstone"); // "fred.flinstone"
dotCase("helloWorld"); // "hello.world"
```

**constantCase** Convert a string to CONSTANT_CASE:

```js
import { constantCase } from "@smitch/js-lib";

constantCase("FRED flinstone"); // "FRED_FLINSTONE"
constantCase("helloWorld"); // "HELLO_WORLD"
```

**truncate:** Truncates a string to the specified number of characters, appending a default ellipsis
(...) or custom suffix. Trailing spaces are removed before appending the suffix.

```js
import { truncate } from "@smitch/js-lib";

truncate("The quick brown fox", 10); // "The quick..."
truncate("The quick brown fox", 10, " ...more"); // "The quick ...more"
truncate("Hi", 10); // "Hi"
```

### Objects

**deepClone:** Creates a deep copy of an object or array, preventing mutations to the original.

```js
import { deepClone } from "@smitch/js-lib";

const obj = { name: "Gandalf", spells: { fire: "Flame of Anor" } };
const clone = deepClone(obj);
clone.spells.fire = "Dragon's Breath";
console.log(obj.spells.fire); // "Flame of Anor" (original unchanged)
console.log(clone.spells.fire); // "Dragon's Breath"
```

**pick:** Extracts specified keys from an object, returning a new object.

```js
import { pick } from "@smitch/js-lib";

const obj = { name: "Gandalf", age: 300, tool: "staff" };
pick(obj, ["name", "tool"]); // { name: "Gandalf", tool: "staff" }
```

### Arrays

**removeDuplicates** Removes duplicates from an array while preserving order:

```js
import { removeDuplicates } from "@smitch/js-lib";

removeDuplicates([4, 2, 3, 1, 4, 1, 2, 5, 3, 4]); // [4, 2, 3, 1, 5]
```

**filterObjects** Filters an array of objects by a key-value pair or extracts specific keys:

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

// Return all wizards whose 'tool' equals 'staff'
console.log(filterObjects(wizards, "tool", "staff"));
// [
//   {
//     name: "Radagast",
//     spells: ["Talk to animals", "Make plants grow"],
//     tool: "staff"
//   },
//   {
//     name: "Gandalf",
//     spells: ["You shall not pass", "Disappear"],
//     tool: "staff"
//   }
// ]

// Get all wizard names whose tool equals staff
console.log(filterObjects(wizards, "tool", "staff", "name"));
// ["Radagast", "Gandalf"]

// Get all wizard names
console.log(filterObjects(wizards, "name"));
// ["Radagast", "Merlin", "Gandalf"]
```

**mergeArrays** Merge multiple arrays:

```js
import { mergeArrays } from "@smitch/js-lib";

let spells = [
  ["Talk to animals", "Make plants grow"],
  ["Dancing teacups", "Turn into fish", "Talk to animals"],
  ["You shall not pass", "Disappear"],
];

console.log(mergeArrays(spells));
// ["Talk to animals", "Make plants grow", "Dancing teacups", "Turn into fish", "Talk to animals", "You shall not pass", "Disappear"]

// Remove duplicates
console.log(mergeArrays(spells, true));
// ["Talk to animals", "Make plants grow", "Dancing teacups", "Turn into fish", "You shall not pass", "Disappear"]
```

**shuffleArray** Randomizes array order:

```js
import { shuffleArray } from "@smitch/js-lib";

const input = [1, 2, 3, 4, 5];

console.log(shuffleArray(input)); // e.g., [3, 1, 5, 2, 4] (random order)
```

### UI

**scrollTo** Scroll to top of element (id):

```js
import { scrollTo } from "@smitch/js-lib";

scrollTo(id);
```

**scrollToBottom** Scroll to bottom of element (id):

```js
import { scrollToBottom } from "@smitch/js-lib";

scrollToBottom(id);
```

**randomColor** Returns a random color (hex, rgb, hsl):

```js
import { randomColor } from "@smitch/js-lib";

console.log(randomColor()); // returns hex color (#fc90ec)
console.log(randomColor("hex")); // returns hex color (#fc90ec)
console.log(randomColor("rgb")); // returns rgb color (rgb(119,73,119))
console.log(randomColor("hsl")); // returns hsl color (hsl(299, 50%, 50%))
```

### Maths

**formatNumber** Format a number with language-sensitive formatting:

```js
import { formatNumber } from "@smitch/js-lib";

const number = 123876456.789;

console.log(formatNumber(number)); // format based on user's device
console.log(formatNumber(number, "de-DE")); // "123.876.456,789"
console.log(formatNumber(number, "es-ES")); // "123.876.456,789"
console.log(formatNumber(number, "ar-EG")); // "١٢٣٬٨٧٦٬٤٥٦٫ٷ٨٩"
console.log(formatNumber(number, "fr-FR")); // "123 876 456,789"
```

**formatDecimals** Format decimal places. Default is 2:

```js
import { formatDecimals } from "@smitch/js-lib";

formatDecimals(99); // 99.00
formatDecimals(9934.7645, 0); // 9935
formatDecimals(9934.7645, 6); // 9934.764500
```

**randomNumber** Generate a random number:

```js
import { randomNumber } from "@smitch/js-lib";

console.log("randomNumber max = default = 100", randomNumber());
console.log("randomNumber max = 10", randomNumber(10));
console.log("randomNumber max = 100", randomNumber(100));
console.log("randomNumber max = 1000", randomNumber(1000));
console.log("randomNumber max = 1000000000", randomNumber(1000000000));
console.log("randomNumber max = 255", randomNumber(255));
```

**round** Round number to nearest integer:

```js
import { round } from "@smitch/js-lib";

console.log("round", round(51.5072)); // 52
```

**roundUp** Round UP number to nearest integer:

```js
import { roundUp } from "@smitch/js-lib";

console.log("round", roundUp(51.5072)); // 52
```

**roundDown** Round DOWN number to nearest integer:

```js
import { roundDown } from "@smitch/js-lib";

console.log("round", roundDown(51.5072)); // 51
```

**formatCurrency** Format currency with symbol, code, or name:

```js
import { formatCurrency } from "@smitch/js-lib";

console.log(formatCurrency(99, "GBP")); // £99.00
console.log(formatCurrency(99, "GBP", "code")); // GBP 99.00
console.log(formatCurrency(99, "GBP", "name")); // 99.00 British pounds
```

### Geo

**geoDistance** Find the distance between 2 geo locations (miles, km, nautical miles):

```js
import { geoDistance } from "@smitch/js-lib";

// London (51.5072, 0.1276) to New York (40.7128, 74.006)
console.log("geoDistance", geoDistance(51.5072, 0.1276, 40.7128, 74.006)); // 3461.02 miles
console.log("geoDistance", geoDistance(51.5072, 0.1276, 40.7128, 74.006, "km")); // 5569.97 km
console.log("geoDistance", geoDistance(51.5072, 0.1276, 40.7128, 74.006, "nautical")); // 3005.55 nautical miles
```

**geoMidpoint** Find the midpoint (centroid) between two or more geo points:

```js
import { geoMidpoint } from "@smitch/js-lib";

// Midpoint between London and Paris
console.log(
  geoMidpoint([
    { lat: 51.5074, lon: -0.1278 },
    { lat: 48.8566, lon: 2.3522 },
  ])
); // { lat: 50.1886, lon: 1.1466 }
```

**geoBearing** Calculate the initial bearing from one point to another (in degrees):

```js
import { geoBearing } from "@smitch/js-lib";

// Bearing from London to Paris
console.log(geoBearing(51.5074, -0.1278, 48.8566, 2.3522)); // 149.55
```

**geoDirection** Get the compass direction (e.g., N, NE, E, SE, S, SW, W, NW) from one point to
another:

```js
import { geoDirection } from "@smitch/js-lib";

// Direction from London to Paris
console.log(geoDirection(51.5074, -0.1278, 48.8566, 2.3522)); // "SE"
```

**isWithinRadius** Check if two points are within a given radius (miles, km, or nautical miles):

```js
import { isWithinRadius } from "@smitch/js-lib";

// Are two points within 10 miles?
console.log(isWithinRadius(51.5074, -0.1278, 51.5007, -0.1246, 10, "miles")); // true
```

### Date

**formatDate** Format a date:

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

**currentTime** Get current time by timezone:
[Timezone reference](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

```js
import { currentTime } from "@smitch/js-lib";

console.log("current time", currentTime("Asia/Tokyo"));
console.log("current time", currentTime("Europe/Athens"));
console.log("current time", currentTime("Europe/Paris", "ar-EG"));
```
