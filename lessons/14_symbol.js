'use strict'

const obj = {
    name: 'Test',
    [ Symbol('Это уникальный символ 1')]: 1,
    [ Symbol('Это уникальный символ 2')]: 2,
    getId: function() {
        return this[id]
    }
 }


console.log(obj[Object.getOwnPropertySymbols(obj)[0]])