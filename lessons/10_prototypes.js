// Каждый obj имеет свой прототип, которыйбереться от родительского элемента

// __proto__  ES6 синтаксис

// Object.getPrototypeOf() до ES6 синтаксиса

// function Cat(name, color) {
//     this.name = name
//     this.color = color
// }
//
// Cat.prototype.voice = function () {
//     console.log(`Cat ${this.name} says meow`)
// }
//
// const cat = new Cat('Wisker', 'white')
//
// console.log(Cat.prototype)
// console.log(cat)
// console.log(cat.__proto__ === Cat.prototype)
// console.log(cat.constructor)
//
// cat.voice()

// ============ Собственный свойства объекто (свойства доступные в prototype)

// function Person() {}
// Person.prototype.legs = 2
// Person.prototype.skin = 'white'
//
// const person = new Person()
// person.name = 'Vlad'
//
// console.log('skin' in person)
// console.log(person.legs)
// console.log(person.eyes)
// console.log(person.name)
//
// console.log(person.hasOwnProperty('name'))
// console.log(person.hasOwnProperty('skin'))

// =========== Object.create()
let proto = {year: 2019}
const myYear = Object.create(proto)

console.log(myYear.year)
console.log(myYear.hasOwnProperty('year'))
console.log(myYear.__proto__ === proto)

proto.year = 2024

console.log(myYear.year)