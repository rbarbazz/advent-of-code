const { input: moves } = require('./input')

let depth = 0
let horizontalPos = 0

moves.forEach(({ action, value }) => {
  if (action === 'up') depth -= value
  if (action === 'down') depth += value
  if (action === 'forward') horizontalPos += value
})

console.log(depth * horizontalPos)
