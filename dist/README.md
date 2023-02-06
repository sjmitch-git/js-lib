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

---
