const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd')

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest()

    request.open('GET', 'js/data1.json')
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    request.send()

    request.addEventListener('load', () => {
        if(request.status === 200) {
            const data = JSON.parse(request.response)
            console.log(data.current.usd)
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2)
        } else {
            inputUsd.value = 'Что-то пошло не так'
        }
    })
})

