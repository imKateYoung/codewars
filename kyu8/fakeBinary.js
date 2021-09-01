// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.Return the resulting string.

function fakeBin(x) {
    let arr = Array.from(x)
    console.log(arr)
    let res = []
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < 5) {
            res.push(0)
        }
        else if (arr[i] >= 5) {
            res.push(1)
        }
    }
    let result = res.join('')
    return result
}

function fakeBin2(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('')
}