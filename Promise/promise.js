const fetchGames = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Preparing data...')

            const data = [
                {id: 1, name: 'Tanks'},
                {id: 2, name: 'Mobile'}
            ]

            resolve(data)
        }, 2000)
    })
}

const renderGameList = (games) => {
    const body = document.querySelector('body')

    games.forEach((game) => {
        const gameElement = document.createElement('div')
        gameElement.innerText = `Игра: ${game.name}`
        gameElement.className = 'element'

        body.append(gameElement)
    })
}


fetchGames()
    .then((data) => {
        renderGameList(data)
    })