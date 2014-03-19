function Spy(target, method) {

    return bind(target, method);

}

module.exports = Spy

var spy = Spy(console, 'error')

console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log(spy.count) // 3