import fruits from './foods'
import { choice, remove } from './helpers'

let fruit = choice(fruits)

console.log(`I would like one ${fruit}, please`)
console.log(`Here you go: ${fruit}`)
console.log(`Delicious! May I have another?`)

let leftOver = remove(fruit, fruits)

console.log(`I am sorry, we are all out. We have ${leftOver.length} left.`)
