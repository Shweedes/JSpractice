class EventEmitter {
    constructor() {
        this.container = new Map()
    }

    on(event, cb) {
        if(!this.container.has(event)){
            this.container.set(event, new Set([cb]))
        } else {
            this.container.get(event).add(cb)
        }
    }

    emit(event) {
        if(this.container.get(event).size > 0) {
            this.container.get(event).forEach(cb => cb())
        }
    }

    off(event, cb) {
        if(this.container.get(event) && this.container.get(event).size > 0) {
            this.container.get(event).delete(cb)
        }
    }
}

const emitter = new EventEmitter()

const cb1 = () => console.log('cb1')

const cb2 = () => console.log('cb2')

emitter.on('event', cb1) // подписка на событие колбэка
emitter.on('event', cb2)
emitter.emit('event') // срабатывание события 'event'
    // 'cb1'
    // 'cb2'
emitter.off('event', cb2)
emitter.emit('event')
    // 'cb1'
