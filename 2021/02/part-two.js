const { input: moves } = require('./input')

let depth = 0
let horizontalPos = 0
let aim = 0

moves.forEach(({ action, value }) => {
  if (action === 'up') aim -= value
  if (action === 'down') aim += value
  if (action === 'forward') {
    horizontalPos += value
    depth += aim * value
  }
})

console.log(depth * horizontalPos)
