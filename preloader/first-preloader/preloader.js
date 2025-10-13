const preloaderElement = document.querySelector('.preloader')

const preloaderClosedEvent = new Event('preloaderClose', {bubbles: true})

preloaderElement.addEventListener('animationend', (event) => {
    if (event.animationName === 'fade-out') {
        preloaderElement.dispatchEvent(preloaderClosedEvent)
    }
})