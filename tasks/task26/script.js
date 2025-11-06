// function increment() {
//     let counter = 0
//
//     return function() {
//         counter++
//         return counter
//     }
// }
//
// const inc = increment()


// или с помощью IIFE

    const inc = (function() {
    let counter = 0

    return function() {
        counter++
        return counter
    }
})()

console.log(inc())
console.log(inc())


