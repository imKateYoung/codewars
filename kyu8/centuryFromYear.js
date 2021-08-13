//Given a year, return the century it is in.


//solution one
const century = year => Math.ceil(year / 100)


//solution two
function century(year) {    
    let sum = 0;
    for (let i = 0; i < year; i += 100) sum++;
    return sum;
}

century(1900)