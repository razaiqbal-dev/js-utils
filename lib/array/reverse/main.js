export const reverse = (array) => {
  let reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray = [...reversedArray, array[i]];
  }
  return reversedArray;
};
