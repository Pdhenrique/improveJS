function sumArray(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i += 1) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3])); // Should print 6
console.log(sumArray([5, 10, 15, 20])); // Should print 50
console.log(sumArray([-1, 1, -2, 2])); // Should print 0
