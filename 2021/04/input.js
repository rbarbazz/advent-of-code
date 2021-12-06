const fs = require('fs')

let [draw, ...boards] = fs
  .readFileSync('input.txt', 'utf8')
  .trim()
  .split('\n\n')
draw = draw.split(',').map((num) => parseInt(num, 10))
boards = boards.map((board) =>
  board.split('\n').map((line) =>
    line
      .trim()
      .split(/ +/)
      .map((num) => parseInt(num, 10)),
  ),
)

exports.draw = draw
exports.boards = boards
