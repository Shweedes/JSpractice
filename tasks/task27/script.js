let array = ['b', 'b', 'c', 'a', 'b', 'b','a']

// ['b', 'a', 'c']

function sortArray(arr) {
    const obj = {

    }

    for(let i = 0; i < arr.length; i++) {
        let element = arr[i]

        if(obj[element]) {
            obj[element]++
        } else {
            obj[element] = 1
        }
    }

    let sortKeys = Object.keys(obj).sort((a, b) => obj[b] - obj[a])

    return sortKeys
}

console.log(sortArray(array))