export const push = (array, element) => {
  try {
    if (typeof element == "object") {
      throw "TypeError: unexpected second parameter, should not be an object";
    }
    return [...array, element];
  } catch (error) {
    console.error(error);
  }
};
