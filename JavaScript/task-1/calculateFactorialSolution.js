
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

calculateFactorial(6) 