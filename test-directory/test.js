import {
  removeDuplicates,
  capitalize,
  camelCase,
  snakeCase,
  pascalCase,
  kebabCase,
  randomColor,
  randomNumber,
} from "@smitch/js-lib";

/* 
ARRAY tests 
*/

/* removeDuplicates - remove duplicates from array */
console.log(removeDuplicates([4, 2, 3, 1, 4, 1, 2, 5, 3, 4]));

/* 
STRING tests 
*/

/* capitalize - capitalize the first character of a string*/
console.log(capitalize("fRED flinstone"));

/* camelCase - camelCase a string*/
console.log("camelCase", camelCase("FRED flinstone & wilma"));

/* snakeCase */
console.log("snakeCase", snakeCase("FRED flinstone & wilma"));

/* kebabCase */
console.log("kebabCase", kebabCase("FRED flinstone & wilma"));

/* pascalCase */
console.log("pascalCase", pascalCase("FRED flinstone"));
console.log("pascalCase", pascalCase("fRED flinstone"));
console.log("pascalCase", pascalCase("fred flinstone & wilma"));

/* 
UI tests 
*/

/* randomColor */
console.log("randomColor hex", randomColor("hex"));
console.log("randomColor rgb", randomColor("rgb"));
console.log("randomColor hsl", randomColor("hsl"));

/* 
MATHS tests 
*/

/* randomNumber */
function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
console.log("randomNumber max = default = 100", randomNumber());
console.log("randomNumber max = 10", randomNumber(10));
console.log("randomNumber max = 100", randomNumber(100));
console.log("randomNumber max = 1000", randomNumber(1000));
console.log("randomNumber max = 10000", randomNumber(10000));
console.log("randomNumber max = 100000", randomNumber(100000));
console.log("randomNumber max = 1000000", randomNumber(1000000));
console.log("randomNumber max = 10000000", randomNumber(10000000));
console.log("randomNumber max = 100000000", randomNumber(100000000));
console.log("randomNumber max = 1000000000", randomNumber(1000000000));
