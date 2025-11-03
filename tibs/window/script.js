const box = document.querySelector('.box')
const btn = document.querySelector('.btn')

const width = box.clientWidth
const height = box.clientHeight

const offsetWidth = box.offsetWidth
const offsetHeight = box.offsetHeight

const scrollWidth = box.scrollWidth
const sccrollHeight = box.scrollHeight

console.log('Client width: ', width,'Client height: ', height)

console.log('Offset width: ', offsetWidth,'Offset height: ', offsetHeight)

console.log('Scroll width: ', scrollWidth,'Scroll height: ', sccrollHeight)

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px'
})

box.addEventListener('scroll', () => {
    console.log(box.scrollTop)
})

