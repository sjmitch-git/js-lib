import { removeDuplicates, capitalize } from "@smitch/js-lib";

function arraysEqual(a1, a2) {
  return JSON.stringify(a1) === JSON.stringify(a2);
}

/* ARRAY tests */

/* removeDuplicates - remove duplicates from array */
let myNums = [4, 2, 3, 1, 4, 1, 2, 5, 3, 4];
let answer = [4, 2, 33, 1, 5];
let uniqueNums = removeDuplicates(myNums);

if (!arraysEqual(uniqueNums, answer)) console.error("FAIL removeDuplicates");

/* STRING tests */

/* capitalize - capitalize the first character of a string*/
let str = "heLLo world";
let capitalizedString = capitalize(str);
console.log(capitalize("FRED"));
