export const indexOf = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
    console.log(i);
  }
};