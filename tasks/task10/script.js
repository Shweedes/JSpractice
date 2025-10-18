// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
//
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
//
//     Пример:
//
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
//
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
//
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
//
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes(minutes) {
    let resultString = ''
    let hours = 0;
    let resultMinutes

    if(minutes < 0 || isNaN(minutes) || !Number.isInteger(minutes)) {
        return "Ошибка, проверьте данные"
    }

    if(minutes >= 60) {
        hours = Math.floor(minutes / 60);
        resultMinutes = minutes - hours * 60
        if(hours > 1 && hours < 5) {
            return resultString += `Это ${hours} часа и ${resultMinutes} минут`
        } else if(hours === 1) {
            return resultString += `Это ${hours} час и ${resultMinutes} минут`
        }
    } else {
        resultMinutes = minutes;
    }

    return resultString += `Это ${hours} часов и ${resultMinutes} минут`
}

console.log(getTimeFromMinutes(0))

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
//
//     Пример:
//
// findMaxNumber(1, 5, 6.6, 11); =>  11
//
// findMaxNumber(1, 5, '6', '10');  =>  0

function findMaxNumber(...nums) {
    if(nums.length < 4) {
        return 0
    }

    for(let element of nums) {
        if(typeof(element) !== "number" || isNaN(element)) {
            return 0
        }
    }

    return Math.max(...nums)
}

console.log(findMaxNumber(1,2, '10', 45))