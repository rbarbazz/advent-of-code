const fs = require('fs')

const input = fs
  .readFileSync('input.txt', 'utf8')
  .trim()
  .split('\n')
  .map((line) => {
    const [action, value] = line.split(' ')
    return { action, value: parseInt(value, 10) }
  })

exports.input = input
