const obj1 = {
    a: 3, b: 2, c: 6,
}

const obj2 = {
    a: 10, b: 10, c: 30, d: 11,
}

const calcObjSum = (...objs) => {
    const objResult = {}

    for(const obj of objs) {
        for (const key in obj) {
            if (objResult[key]) {
                objResult[key] += obj[key];
            } else {
                objResult[key] = obj[key];
            }
        }
    }

    return objResult
}

console.log('Result: ',calcObjSum(obj1, obj2))