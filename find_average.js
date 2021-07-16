
//Write a function which calculates the average of the numbers in a given list.

function find_average(array) {

    if (array.length === 0) {
        return 0
    }
    let a = 0
    for (let i = 0; i < array.length; i++) {
        a = + array[i]
    }
    return a / array.length
}

find_average([1, 2, 3])
find_average([])