import {
  removeDuplicates,
  capitalize,
  camelCase,
  snakeCase,
  pascalCase,
  kebabCase,
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
