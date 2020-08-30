# This is a function to Sort array

# USAGE

```
<!-- Ascending -->
import { array } from "r-js-utils";

console.log(array.sort([1, 2, 5, 2, 5, 7]));


<!-- Descending -->
import { array } from "r-js-utils";

console.log(array.sort([1, 2, 5, 2, 5, 7],'descending'));

```

## NOTE:

- import { array } from **r-js-utils**
- the first parameter to the function **array.sort()** should be an array to be sorted
- the second parameter to the function **array.sort()** is optional, if not passes, the array will be sorted in ascending order
- second parameter, if passed as "descending", will sort the array in descending order
