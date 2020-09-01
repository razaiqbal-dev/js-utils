export function concat() {
  try {
    let newArray = [];
    for (let i = 0; true; i++) {
      if (arguments[i]) {
        newArray = [...newArray, ...arguments[i]];
      } else {
        break;
      }
    }
    return newArray;
  } catch (error) {
    console.error(error);
  }
}
