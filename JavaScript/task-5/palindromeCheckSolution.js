function isPalindrome(word) {
  let newValue = "";
  let finalValue = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newValue = word[i];
    finalValue = finalValue + newValue;

  }

  return finalValue.toLowerCase() === word.toLowerCase()
 
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
