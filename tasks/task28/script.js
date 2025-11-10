
class EventEmitter {
    constructor() {
        this.container = new Map()
    }

    on(event, cb) {
        if(!this.container.has(event)) {
            this.container.set(event, new Set())
        }
        this.container.get(event).add(cb)
        return this
    }

    off(event, cb) {
        this.container.get(event).delete(cb)
        return this
    }

    emit(event) {
        this.container.get(event).forEach((cb) => {
            cb()
        })
        return this
    }

}


const emitter = new EventEmitter()
const cb1 = () => console.log('cb1')
const cb2 = () => console.log('cb2')
emitter
    .on('event', cb1) // повписка коппбэка cb1 на событие 'event'
    .on('event', cb2)
    .emit('event') // срабатывание события 'event'
    // 'cb1'
    // 'cb2'
    .off('event', cb2) // отписка коллбэка cb2 от события 'event'
    .emit('event')
    // 'cb1'