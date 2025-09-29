const sortArray = [-1, 0, 3, 4, 5, 6]

const binarySearch = (sortArray, target) => {
    let startPointer = 0
    let endPointer = sortArray.length -1

    while(startPointer <= endPointer) {
        let midPointer = Math.floor((startPointer + endPointer) / 2)

        if(sortArray[midPointer] === target) {
            return midPointer
        } else if(target < sortArray[midPointer]) {
            endPointer = midPointer - 1
        } else {
            startPointer = midPointer + 1
        }

    }
    return -1
}

console.log(binarySearch(sortArray, 4))
