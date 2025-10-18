// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число.
// Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи.
// Причем, их количество должно быть равно переданному аргументу.
//
// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
//
// Пример:
//
// fib(4) => "0 1 1 2"
//
// fib(7) => "0 1 1 2 3 5 8"
//
// fib('7') => ""
//
// fib(1) => "0"
//
// fib(0) => ""

function fib(number) {
    let resultString = '';
    let array = [0, 1];
    if(!Number.isInteger(number) || isNaN(number) || typeof(number) !== "number") {
        return resultString
    }
    if (number === 0) {
        return resultString
    } else if (number === 1) {
        return resultString += 0
    }

    for(let i = 2; i < number; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }

    return array.join(' ')
}

console.log(fib(5))

function fibWithRecursion (number) {
    if(!Number.isInteger(number) || isNaN(number) || typeof(number) !== "number") {
        return resultString
    }

    function generateFib(n, sequence = []) {
        if(n === 0) {
            return sequence
        }

        if(sequence.length === 0) {
            return generateFib(n - 1, [0])
        } else if(sequence.length === 1) {
            return generateFib(n - 1, [0, 1])
        } else {
            const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2]
            return generateFib(n - 1, [...sequence, nextNumber])
        }
    }

    const result = generateFib(number)
    return result.join(" ")
}

console.log(fibWithRecursion(5))