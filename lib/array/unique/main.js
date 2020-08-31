export const unique = (array) => {
  try {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      let present = false;
      for (let j = 0; j < i; j++) {
        if (array[i] == array[j]) {
          present = true;
          break;
        }
      }
      !present && (newArray = [...newArray, array[i]]);
    }
    return newArray;
  } catch (error) {
    console.log(error);
  }
};
