let array = [5,4,-1,3,2,1]

function bubbleSort(array) {
    for (let j = 0; j < array.length; j++){
        for (let i = 0; i < array.length; i++) {
            if(array[i] > array[i+1]){
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
            }
        }
    }
}

bubbleSort(array);

console.log(array)

