// Необходимо написать свою функцию promiseAll, которая является
// аналогом Promise.all.
// на вход поступает массив промисов
// реджект, если хотя бы один промис упал
// резолв, если все промисы успешно выполнены
// в случае резолва порядок результатов должен сохраняться


const promiseAll = (promises) => {

    return new Promise((resolve, reject) => {

        if(promises.length === 0) {
            resolve([])
            return
        }

        const results = []
        let counter = 0

        promises.forEach((prom, index) => {
            Promise.resolve(prom)
                .then((result) => {
                    results[index] = result
                    counter++

                    if(counter === promises.length) {
                        resolve(results)
                    }

                })
                .catch((err) => {
                    reject(err)
                })
        })

    })

}

promiseAll([Promise.resolve(10), Promise.resolve(20)])
.then(result => console.log(result)) // [10, 20]
.catch(error => console.log(error))




















//
// return new Promise((resolve, reject) => {
//     if(promises.length === 0) {
//         resolve([])
//         return
//     }
//
//     const results = []
//     let counter = 0
//
//     promises.forEach((promise, index) => {
//         Promise.resolve(promise)
//             .then(result => {
//                 results[index] = result
//                 counter++
//
//                 if(counter === promises.length) {
//                     resolve(results)
//                 }
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
//
// })