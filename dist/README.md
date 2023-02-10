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

## Functions

### String

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

### Array

**removeDuplicates**  
Remove duplicates from array

```js
import { removeDuplicates } from "@smitch/js-lib";

removeDuplicates([4, 2, 3, 1, 4, 1, 2, 5, 3, 4]); // [ 4, 2, 3, 1, 5 ]
```

---

### UI

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

### Maths

**formatNumber**  
Format a number with commas as thousands separators.

```js
import { formatNumber } from "@smitch/js-lib";

formatNumber(405029888); // 405,029,988
```

**randomNumber**  
Generate a random number.

```js
import { randomNumber } from "@smitch/js-lib";

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
```

**geoDistance**  
Find the distance between 2 geo locations (miles, km, nautical miles).

```js
import { geoDistance } from "@smitch/js-lib";

/* London to New York */
console.log("geoDistance", geoDistance(51.5072, 0.1276, 40.7128, 74.006));
console.log("geoDistance", geoDistance(51.5072, 0.1276, 40.7128, 74.006, "km"));
console.log(
  "geoDistance",
  geoDistance(51.5072, 0.1276, 40.7128, 74.006, "nautical")
);
```
