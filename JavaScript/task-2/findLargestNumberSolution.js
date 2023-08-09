const numbArray = [
    1,23,64,123,635,32,12,567,345
]

const findLargestNumber = () => {
    let num = numbArray[0]

    for(let i = 0; i < numbArray.length; i++){
    
        if(numbArray[i] > num){
            num = numbArray[i]
        }
    }

    console.log(num)
} 

findLargestNumber()