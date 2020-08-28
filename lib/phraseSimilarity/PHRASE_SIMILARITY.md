# This is a function to check similarity between a **Base** phrase and an array of multiple phrases

# USAGE

```

const checkSimilarity = require("./index");

console.log(checkSimilarity("test phrase", ["test phrase 1"]));

```

## NOTE:

- import the function as **checkSimilarity**
- the first parameter to the function should be a string, i.e. the base string/phrase for comparison
- the second parameter to the function should be an array of strings/phrases to be compared with the base string/phrase
- there is a list of words to be ignored in the comparison given in the **ignoredWords** array
