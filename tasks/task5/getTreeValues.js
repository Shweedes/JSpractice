const tree = {
    value: 'A',
    children: [
        {
            value: 'B',
            children: [
                { value: 'D', children: [] },
                { value: 'E', children: [] }
            ]
        },
        {
            value: 'C',
            children: [
                { value: 'F', children: [] }
            ]
        }
    ]
};

const resultArray = []

function traverse1(node) {
    console.log('Посетили узел:', node.value);
    resultArray.push(node.value)

    node.children.forEach((child) => {
        console.log(`Переходим от ${node.value} к ${child.value}`);
        traverse1(child)
    })

    console.log(`Возвращаемся из ${node.value}`);
    return resultArray
}

console.log('=== Начало обхода ===');
const array1 = traverse1(tree);
console.log(array1)
console.log('=== Конец обхода ===');