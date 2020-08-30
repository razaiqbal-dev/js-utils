# This is a function to add elements to an array at certain position

# USAGE

```

import { array } from "r-js-utils";

console.log(array.splice([1, 2, 5, 2, 5, 7], 1 , [9,8], 0));


```

## NOTE:

- import { array } from **r-js-utils**
- the function should be used as **array.splice()**
- arguments
  - the first argument to the function should be the **array** to be worked on
  - the second argument to the function should be the **index** where the new element(s) should be added
  - the third parameter to the function should be the **array** of new elements to be added to the base array
  - the fourth parameter to the function is a number(optional). It defines the number of elements to be replaced from the index where the new elements are being added
