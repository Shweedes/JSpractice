const string = "Мен зовут (з) микол(нн)а"
let inside = false
let resultString = ''

for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
        inside = true
    } else if (string[i] === ')') {
        inside = false
    } else if (inside) {
        resultString += '*'
    } else {
        resultString += string[i]
    }
}

console.log(resultString);