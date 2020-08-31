// i is the starting index for adding new element
// c is the number of elements to be removed while adding the new element
export const splice = (array, i, newElements = [], c = 0) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};
