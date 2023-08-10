function reverseString(inputString) {
  let newValue = "";
  let finalValue = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    newValue = inputString[i];
    finalValue = finalValue + newValue;
  }
  return finalValue;
}

const originalString = "hello";
const reversed = reverseString(originalString);
console.log("Original:", originalString);
console.log("Reversed:", reversed);
