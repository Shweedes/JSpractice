const sectionElements = document.querySelectorAll('section')

const animationSection = () => {
    sectionElements.forEach((sectionElement) => {
        sectionElement.classList.add('is-visible')
    })
}

document.addEventListener('preloaderClose', () => {
    animationSection()
})