import {
  removeDuplicates,
  filterObjects,
  capitalize,
  camelCase,
  snakeCase,
  pascalCase,
  kebabCase,
  randomColor,
  randomNumber,
  formatNumber,
  geoDistance,
  formatCurrency,
  mergeArrays,
  formatDate,
  currentTime,
} from "@smitch/js-lib";

/* 
ARRAY tests 
*/

// filterObjects
// Filter an array of objects

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
// console.log(filterObjects(wizards, "tool", "staff"));

// get all wizard names whose tool equals staff
// console.log(filterObjects(wizards, "tool", "staff", "name"));

// get all wizard names
// console.log(filterObjects(wizards, "name"));

// get all wizard spells
// console.log(filterObjects(wizards, "spells"));

// merge multiple arrays
let spells = [
  ["Talk to animals", "Make plants grow"],
  ["Dancing teacups", "Turn into fish", "Talk to animals"],
  ["You shall not pass", "Disappear"],
];

// console.log(mergeArrays(spells));

// remove duplicates
// console.log(mergeArrays(spells, true));

/* removeDuplicates - remove duplicates from array */
/* console.log(
  removeDuplicates([4, 2, 3, 1, 4, 1, 2, 5, 3, 4]).sort((a, b) => a + b)
);
console.log(
  removeDuplicates([
    "mike",
    "charlie",
    "ken",
    "cindy",
    "mike",
    "charlie",
    "ken",
    "cindy",
    "ken",
    "cindy",
  ]).sort()
); */
/* 
STRING tests 
*/

/* capitalize - capitalize the first character of a string*/
// console.log(capitalize("fRED flinstone"));

/* camelCase - camelCase a string*/
// console.log("camelCase", camelCase("FRED flinstone & wilma"));

/* snakeCase */
// console.log("snakeCase", snakeCase("FRED flinstone & wilma"));

/* kebabCase */
// console.log("kebabCase", kebabCase("FRED flinstone & wilma"));

/* pascalCase */
/* console.log("pascalCase", pascalCase("FRED flinstone"));
console.log("pascalCase", pascalCase("fRED flinstone"));
console.log("pascalCase", pascalCase("fred flinstone & wilma")); */

/* 
UI tests 
*/

/* randomColor */
/* console.log("randomColor hex", randomColor("hex"));
console.log("randomColor rgb", randomColor("rgb"));
console.log("randomColor hsl", randomColor("hsl")); */

/* 
MATHS tests 
*/

/* randomNumber */
/* console.log("randomNumber max = default = 100", randomNumber());
console.log("randomNumber max = 10", randomNumber(10));
console.log("randomNumber max = 100", randomNumber(100));
console.log("randomNumber max = 1000", randomNumber(1000));
console.log("randomNumber max = 10000", randomNumber(10000));
console.log("randomNumber max = 100000", randomNumber(100000));
console.log("randomNumber max = 1000000", randomNumber(1000000));
console.log("randomNumber max = 10000000", randomNumber(10000000));
console.log("randomNumber max = 100000000", randomNumber(100000000));
console.log("randomNumber max = 1000000000", randomNumber(1000000000));
console.log("randomNumber max = 1000000000", randomNumber(255)); */

/* formatNumber */
const number = 123876456.789;

// console.log(formatNumber(number, "de-DE")); // "123.876.456,789"
// console.log(formatNumber(number)); // "123,876,456.789"
// console.log(formatNumber(number, "es-ES")); // "123.876.456,789"
//console.log(formatNumber(number, "ar-EG")); // "١٢٣٬٨٧٦٬٤٥٦٫٧٨٩"
//console.log(formatNumber(number, "fr-FR")); // "123 876 456,789"

/* geoDistance */
/* London to New York */
/* console.log("geoDistance", geoDistance(51.5072, 0.1276, 40.7128, 74.006));
console.log("geoDistance", geoDistance(51.5072, 0.1276, 40.7128, 74.006, "km"));
console.log(
  "geoDistance",
  geoDistance(51.5072, 0.1276, 40.7128, 74.006, "nautical")
); */

/* console.log(formatCurrency(99, "INR"));
console.log(formatCurrency(99.54, "INR", "code"));
console.log(formatCurrency(99.54, "INR", "name")); */

const date = new Date("2023-12-03");

//console.log(formatDate(new Date(), "en-GB", "day dd/mm/yyyy")); // "Monday, 13/02/2023"
//console.log(formatDate(new Date(), "en-GB", "dd month yyyy")); // "13 February 2023"
//console.log(formatDate(new Date(), "en-GB", "day dd month yyyy")); // "Monday, 13 February 2023"
//console.log(formatDate(new Date(), "en-GB", "dd/mm/yyyy")); // "13/02/2023"

//console.log(formatDate(new Date(), "ru", "day dd/mm/yyyy")); // "понедельник, 13.02.2023 г."
//console.log(formatDate(new Date(), "ar-EG", "dd month yyyy")); // "١٣ فبراير ٢٠٢٣"
//console.log(formatDate(date, "es", "day dd month yyyy")); // "domingo, 3 de diciembre de 2023"
//console.log(formatDate(new Date(), "en-US", "dd/mm/yyyy")); // "2/13/2023"

console.log("current time", currentTime());
console.log("current time", currentTime("Europe/Paris", "ar-EG"));
console.log("current time", currentTime("Asia/Tokyo"));
console.log("current time", currentTime("Europe/Athens"));
