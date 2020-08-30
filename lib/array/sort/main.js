export const sort = (array, type = "ascending") => {
  if (type === "ascending") {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        i = -1;
      }
    }
  } else if (type === "descending") {
    for (i = array.length - 1; i > 0; i--) {
      if (array[i] > array[i - 1]) {
        let temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
        i = array.length - 1;
      }
    }
  }
  return array;
};
