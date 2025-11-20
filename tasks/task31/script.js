const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(element => element.rating >= 8)
}

function showListOfFilms(arr) {
    return arr.reduce((sum, element) => {
        return `${typeof(sum) === 'object' ? sum.name : sum}, ${element.name}`
    })
}

function setFilmsIds(arr) {
    return arr.map((element, index) => {
        return {
            name: element.name,
            rating: element.rating,
            id: index
        }
    })
}

const transformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(element => typeof(element.id) === 'number')
}

console.log(showGoodFilms(films))

console.log(showListOfFilms(films))

console.log(setFilmsIds(films))

console.log(checkFilms(transformedArray))