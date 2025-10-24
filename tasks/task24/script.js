// Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу по возможности без повторений.
// Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой,
// поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).
//
// Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение.
// Если строка является панграммой - вернется true, если нет - false.
//
// Пример:
//
// isPangram(«The quick brown fox jumps over the lazy dog») => true
//
// isPangram(«Hello world») => false
//
// P.S. Эта задача имеет много вариантов решения, часть из которых использует возможности, которые мы будем проходить дальше по курсу.
// Но и без них можно это сделать.
//
// В ответах я приложу несколько вариантов для ознакомления.

function isPangram(string) {
    let wordString = string.toLowerCase()
    let flag = true
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    return alphabet.split('').every(element => {
        return string.indexOf(element) !== -1
    })

    /*for(let i = 0; i < alphabet.length; i++) {
        if(flag === false) {
            break
        }
        for(let j = 0; j < wordString.length; j++) {
           if(alphabet[i] === wordString[j]) {
               break
           }
           if(alphabet[i] !== wordString[j] && j === wordString.length - 1) {
               flag = false
               break
           }
        }
    }

    return flag*/
}

const string = 'The quick brown fox jumps over the lazy dog'

console.log(isPangram(string))