let p = new Promise ( function (resolve, reject) {
    setTimeout(() => {
        console.log("Hello!")
        let value = "Все гуд!"
        reject(new Error("o_O"))
    },2000)
})

/*
p.then(
    result => {
        console.log(result)
    },
    error => {console.log(error)}
)
*/

p.catch(err => {console.log(err)})