const { input: depths } = require('./input')

let result = 0
let prev

depths.forEach((depth) => {
  if (depth > prev) {
    result += 1
  }

  prev = depth
})

console.log(result)
