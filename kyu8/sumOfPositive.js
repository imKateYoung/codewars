//You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    let result = []
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            result.push(arr[i]);
            console.log(result)
        }
    }
    const sum = result.reduce(function (a, b) { return a + b }, 0)
    return sum
}


function positiveSum2(arr){
    let result = 0
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > i){
            result += arr[i]
        }
    }
    return result
}

function positiveSum3(arr){
    const sum = arr.reduce(function(a,b){return a + (b >0 ? b: 0)})
}
