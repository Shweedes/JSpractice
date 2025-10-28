const btn = document.querySelector('.btn')

function myAnimation() {
    const element = document.querySelector('.box')
    let pos = 0

    let id = setInterval(() => {
        if(pos === 300) {
            clearInterval(id)
        } else {
            pos++
            element.style.top = `${pos}px`
            element.style.left = `${pos}px`
        }
    }, 10)

}

btn.addEventListener('click', myAnimation)