// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

function countPositivesSumNegatives(input) {
    //count of positives 
    if (input == null || input.length == 0) {
        return []
    }

    let result = []
    let positive = input.filter(i => i > 0)
    console.log(positive)
    let negative = input.filter(i => i < 0)
    console.log(negative)

    let count = 0
    for (let i = 0; i < positive.length; i++) {
        if (positive[i] >= 0) {
            count++
        }
    }
    console.log(count)
    let sum = negative.reduce((a, b) => a + b, 0)
    console.log(sum)
    result.push(count)
    result.push(sum)
    return result

}