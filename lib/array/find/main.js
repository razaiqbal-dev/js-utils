export const find = (array, element) => {
  try {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error(error);
  }
};
