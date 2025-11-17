// Тренеровка работы с промисами

console.log('Загразка...')

const request = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...')

        const product = {
            name: 'TV',
            price: 2000
        }

        resolve(product)

    }, 2000)
})

request.then((data) => {
    return new Promise(resolve => {
        data.order = 'YES'
        resolve(data)
    })
}).then(data => {
    console.log(data)
})