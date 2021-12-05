const { input: depths } = require('./input')

let result = 0
let prev

depths.forEach((depth, i) => {
  const sum = depths[i] + depths[i + 1] + depths[i + 2]

  if (sum > prev) {
    result += 1
  }

  prev = sum
})

console.log(result)
