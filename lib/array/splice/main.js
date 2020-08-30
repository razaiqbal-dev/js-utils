// i is the starting index for adding new element
// c is the number of elements to be removed while adding the new element
export const splice = (array, i, newElements = [], c = 0) => {
  let errors = error({
    array: array,
    index: i,
    newElements: newElements,
    count: c,
  });
  if (errors.length > 0) {
    errors.map((error) => console.error(error));
    return;
  }
  let newArray = [];
  let preArray = [];
  for (let p = 0; p < i; p++) {
    preArray = [...preArray, array[p]];
  }
  let postArray = [];
  for (let q = i + c; q < array.length; q++) {
    postArray = [...postArray, array[q]];
  }
  newArray = [...preArray, ...newElements, ...postArray];
  return newArray;
};

const error = ({ array, index, newElements, count }) => {
  let errors = [];
  if (typeof array != "object" || !(array instanceof Array)) {
    errors = [...errors, "The first argument to the function must be an array"];
  }
  if (array.length < 1) {
    errors = [...errors, "Empty array passed as first argument"];
  }
  if (typeof index != "number") {
    errors = [
      ...errors,
      "The second argument to the function must be a number",
    ];
  }
  if (index < 0 || index > array.length) {
    errors = [...errors, "Index out of bound"];
  }
  if (typeof newElements != "object") {
    errors = [...errors, "The third argument to the function must be an array"];
  }
  if (newElements.length <= 0) {
    errors = [
      ...errors,
      "The new elements array must contain atleast 1 element",
    ];
  }
  if (typeof count != "number") {
    errors = [
      ...errors,
      "The fourth argument to the function must be a number",
    ];
  }
  return errors;
};
