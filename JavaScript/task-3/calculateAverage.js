const numberArray = [150, 220, 330, 410, 50];


function calculateAverage(numbers){
    if(numbers.length === 0){
        return 0
    }
    
    let sum = 0 
    
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }

    const average = sum / numbers.length
    return average
}

const average = calculateAverage(numberArray)
console.log(average)