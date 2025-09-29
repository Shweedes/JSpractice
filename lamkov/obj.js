const obj1 = {
    name: 'Ваня',
    age: 19,
    address: {
        city:'Москва'
    }
}

const obj2 = {
    name: 'Ваня',
    age: 19,
    address: {
        city:'Москва'
    }
}

const areObjectsEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    console.log('keys1:', keys1)
    console.log('keys2:', keys2)

    if (keys1.length !== keys2.length) {
        return false
    }

    for (const key in obj1) {
        const value1 = obj1[key];
        const value2 = obj2[key];
        const areValuesIsObjects =
            typeof value1 === 'object' && typeof  value2=== 'object'

        if (areValuesIsObjects) {
            return areObjectsEqual(value1,value2)
        }

        if (value1 !== value2) {
            return false
        }
    }

    return true
}


console.log("Равны ли объекты:", areObjectsEqual(obj1,obj2))