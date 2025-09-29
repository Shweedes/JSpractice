Function.prototype.myBind = function(context, ...args1) {
    const contextFn = this

    return function(...args2) {
        const args1AndArgs2 = args1.concat(args2)
        return contextFn.apply(context, args1AndArgs2)
    }
}


const obj = {
    a: 1,
    say(arg1, arg2) {
        return this.a + arg1 + arg2;
    }
}

const fn = obj.say
console.log(fn.myBind(obj, 1)(2))


