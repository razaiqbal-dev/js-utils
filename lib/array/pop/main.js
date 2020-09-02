export const pop = (array) => {
  //   array[array.length - 1] = null;
  let newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray = [...newArray, array[i]];
  }
  return newArray;
};
