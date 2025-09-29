const arr1 = ['А', 'Б', 'В',[1]]
const arr2 = ['А', 'Б', 'В',[1, 4]]

const areArrayEquals = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false
    }

    for(let i = 0; i < arr1.length; i++) {
        const value1 = arr1[i]
        const value2 = arr2[i]
        if(Array.isArray(value1) && Array.isArray(value2)) {
            if(!areArrayEquals(value1, value2)) {
                return false
            } else {
                continue
            }
        }

        if (value1 !== value2) {
            return false
        }
    }

    return true
}

console.log('Результат: ',areArrayEquals(arr1, arr2))
