// Context определяет как функция была вызвана и постоянно указывет на слово this

// const person = {
//     surname: 'Старк',
//     knows: function (what, name) {
//         console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
//     }
// }
//
// const John = {
//     surname: 'Сноу'
// }
//
// person.knows('все', 'Бран') // Ты все знаешь, Бран Старк
//
// person.knows.call(John, 'ничего не', 'Джон 1') // Ты ничего не знаешь, Джон Сноу
// person.knows.apply(John, ['ничего не', 'Джон 2']) // Ты ничего не знаешь, Джон Сноу
// person.knows.call(John, ...['ничего не', 'Джон 3']) // Ты ничего не знаешь, Джон Сноу
// person.knows.bind(John, 'ничего не', 'Джон 4')() // Ты ничего не знаешь, Джон Сноу
//
// const bound = person.knows.bind(John, 'ничего не', 'Джон 5') // Ты ничего не знаешь, Джон Сноу
//
// bound()

// ================================================================================

// function Person(name, age) {
//     this.name = name
//     this.age = age
//
//     console.log(this)
// }
//
// const Elena = new Person('Elena', 20)

// ============== Явная передача контекста ===============================

// function logThis() {
//     console.log(this)
// }
//
// const obj = {num: 42}
// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()

// ============== Неявная передача контекста ==============================

// const animal = {
//     legs: 4,
//     logthis: function () {
//         console.log(this)
//     }
// }
//
// animal.logthis()

// ============== Как работают стрелочные фугкции =========================

// function Cat(color){
//     this.color = color
//     console.log('This:', this);
//     ( () => {console.log('Arrow this', this)} )()
// }
//
// new Cat('Red')
