//Your goal is to return multiplication table for number that is always an integer from 1 to 10.

function multiTable(number) {
    // good luck
    let table = []
    for (let i = 1; i <= 10; i++) {
        table.push(`${i} * ${number} = ${i * number}`)
    }
    return table.join('\n')
}