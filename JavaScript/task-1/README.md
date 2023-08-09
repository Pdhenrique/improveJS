# Task 1: Calculate Factorial

This task involves writing a function to calculate the factorial of a given non-negative integer.

## Exercise

Write a JavaScript/TypeScript function that calculates the factorial of a non-negative integer. The factorial of a number is the product of all positive integers less than or equal to that number.

For example:
- Factorial of 0 is 1 (0! = 1)
- Factorial of 1 is 1 (1! = 1)
- Factorial of 2 is 2 (2! = 2)
- Factorial of 3 is 6 (3! = 3 * 2 * 1 = 6)
- Factorial of 4 is 24 (4! = 4 * 3 * 2 * 1 = 24)

Your function should take an integer as a parameter and return its factorial.

## Example

```javascript
function calculateFactorial(num) {
  
    if(num <= 0){
        return "The factorial cannot be calculated for negative numbers.";
    }else if( num === 0 || num === 1){
        return 1
    }else{
        let factorial = 1
        for(let i = 2; i <= num; i++){
            factorial = factorial * i

           return factorial
        }
    }
}

console.log(calculateFactorial(5));

```

## Guidelines

- The input number should be a non-negative integer.
- Consider edge cases like 0 and 1, which have factorial values of 1.

## Solution

The solution for this exercise can be found in the 'solution' folder of this task.