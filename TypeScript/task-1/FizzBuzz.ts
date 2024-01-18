function FizzBuzz(number: number): void {

  if(number % 3 === 0 && number % 5 === 0){
    console.log('fizzBuzz')
  } else if( number % 3 === 0) {
    console.log('Fizz')
  } else if( number % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(number)
  }


}

FizzBuzz(3);   
FizzBuzz(5);   
FizzBuzz(15);  
FizzBuzz(7);