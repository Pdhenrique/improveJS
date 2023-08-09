# Task 2: Find Largest Number

This task involves writing a JavaScript/TypeScript function to find the largest number in an array of numbers.

## Exercise

Write a function that takes an array of numbers as input and returns the largest number in the array.

For example:
- For the input array [1, 23, 64, 123, 635, 32, 12, 567, 345], the largest number is 635.

Your function should iterate through the array and find the largest number.

## Example

```javascript
const numbArray = [
    1,23,64,123,635,32,12,567,345
]

const findLargestNumber = (numbers) => {
    let num = numbers[0]

    for(let i = 0; i < numbers.length; i++){
    
        if(numbArray[i] > num){
            num = numbArray[i]
        }
    }

    console.log(num)
} 

findLargestNumber(numbArray)
```
