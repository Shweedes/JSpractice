const array = [1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4]

function countOccurences(array) {
    const count = {};
    let maxCount = 0
    let maxKey

    for(let i = 0; i < array.length; i++) {
        if(count[array[i]]) {
            count[array[i]]++
        } else {
            count[array[i]] = 1
        }

        if(count[array[i]] > maxCount) {
            maxCount = count[array[i]]
            maxKey = array[i]
        }
    }

    return [count, maxKey];
}


console.log(countOccurences(array))

