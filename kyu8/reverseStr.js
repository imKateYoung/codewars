//Complete the solution so that it reverses the string passed into it.

function reverStr(str){
    let arr =[]
    for(i = 0; i <str.length; i++){
        arr.push(str[i])
    }
    let result = arr.reverse().join('')
    return result
}



function reverstStr2(str) {
    return str.split('').reverse().join('')
}