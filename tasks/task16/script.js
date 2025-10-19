// У вас есть список учеников, которые хотят поиграть в игру:
//
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
//
// Внутри она сначала сортирует имена по алфавиту.
// Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
// Эти группы должны быть массивами.
// Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
//
// Пример:
//
// sortStudentsByGroups(students)  =>
//
// [
//     [ 'Andrew', 'Ann', 'Bernard' ],
//     [ 'Cris', 'Josh', 'Mark' ],
//     [ 'Peter', 'Sam', 'Sandra' ],
//     'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:
//
//     [
//         [ 'Andrew', 'Ann', 'Bernard' ],
//         [ 'Cris', 'Josh', 'Mark' ],
//         [ 'Peter', 'Sam', 'Sandra' ],
//         'Оставшиеся студенты: -'
//     ]
// А если добавить одного, то:
//
// [
//     [ 'Andrew', 'Ann', 'Bernard' ],
//     [ 'Cris', 'Josh', 'Mark' ],
//     [ 'Peter', 'Sam', 'Sandra' ],
//     'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let teamArray = []
    let resultArray = []
    let counter = 0
    arr.sort()

    arr.forEach((element) => {
        counter++;
        teamArray.push(element)

        if(counter === 3) {
            resultArray.push(teamArray)
            counter = 0
            teamArray = []
        }
    })

    resultArray.push(`Оставшиеся студенты: ${teamArray.length === 0 ? '-' : teamArray.join(', ')}`)

    return resultArray
}

console.log(sortStudentsByGroups(students))
