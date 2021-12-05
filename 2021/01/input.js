const fs = require('fs')

const input = fs
  .readFileSync('input.txt', 'utf8')
  .trim()
  .split('\n')
  .map((line) => parseInt(line, 10))

exports.input = input
