// null, undefined, boolean, number, string, object, symbol

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'JavaScript')
// console.log(typeof undefined) // undefined
// console.log(typeof Math)
// console.log(typeof function () {})
// console.log(typeof Symbol('Js'))
// console.log(typeof null) // object
// console.log(typeof NaN)

//Приведение типов
/*
let language = 'JavaScript'
if (language) {
    console.log('The best language is', language)
}*/

//Всегда false: ''(пустая строка), 0, null, undefined, NaN, false
// console.log(Boolean('')) // false
// console.log(Boolean('Hello')) // true
// console.log(Boolean('0')) // true
// console.log(Boolean(0)) // false
// console.log(Boolean(null)) // false
// console.log(Boolean([])) // true
// console.log(Boolean({})) // true
// console.log(Boolean(function () {})) //true

//Строки и числа

// console.log(1 + '2') // строка 12
// console.log(1 - '2') // число -1
// console.log('' + 1 + 0) // строка 10
// console.log('' - 1 + 0) // число -1
// console.log('3' * '8') // число 24
// console.log(4 + 10 + 'px') // строка 14px
// console.log('px' + 5 + 10) // строка px510
// console.log('42' - 40) //число 2
// console.log('42px' - 2) // NaN
// console.log(null + 2) // число 2
// console.log(undefined + 42) // NaN

// == vs ===

// console.log(2 == '2') // true
// console.log(2 === '2') // false
// console.log(undefined == null) // true
// console.log(undefined === null) // false
// console.log('0' == false) // true
// console.log('0' == 0) // true
// console.log(0 == 0) // true

// ==== Список неоднозначных сравнений ====
console.log(false == '') // true
// console.log(false == []) // true
// console.log(false == {}) // false
// console.log('' == 0) // true
// console.log('' == []) // true
// console.log('' == {}) // false
// console.log(0 == []) // true
// console.log(0 == {}) // false
// console.log(0 == null) // false (false == 'пустота')