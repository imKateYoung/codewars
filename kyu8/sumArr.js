//I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. 

function arrayPlusArray(arr1, arr2) {
    const res = arr1.reduce((acc, c) => acc + c)
    console.log(res)
    const res2 = arr2.reduce((acc, c) => acc + c)
    console.log(res2)
    const result = res + res2
    return result
}

function arrayPlusArray2(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, c) => acc + c)

}