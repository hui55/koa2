

/**
 * 
 * 
 * @param {any} arr 
 */
function *iterator(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i]
    }
}

const gen = iterator(['吃饭','睡觉','打游戏'])
console.log(`1: ${gen.next().value}`)
console.log(`2: ${gen.next().value}`)
console.log(`3: ${gen.next().value}`)
console.log(`4: ${gen.next().done}`)