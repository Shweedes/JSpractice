const students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Miky',
        progress: 10
    }],
    html: {
        basic: [{
            name: 'Bob',
            progress: 30
        }, {
            name: 'Sven',
            progress: 15
        }],
        pro: [{
            name: 'Alex',
            progress: 50
        },{
            name: 'Andrew',
            progress: 100
        }]
    }
}

const recursion = (node) => {
    if(Array.isArray(node)) {
        return node.reduce((sum, element) => {
            return sum + element.progress
        }, 0)
    } else if(typeof(node) === 'object' && node !== null) {
        return Object.values(node).reduce((sum, element) => {
            return sum + recursion(element)
        }, 0)
    }

    return 0
}

console.log(recursion(students))