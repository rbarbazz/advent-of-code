const { boards, draw } = require('./input')

let winnerBoard
let lastNum

const isWinner = (board) => {
  if (board.find((line) => line.every((num) => num === null))) {
    return true
  }

  for (let i = 0; i < board.length; i++) {
    if (
      board[0][i] === null &&
      board[1][i] === null &&
      board[2][i] === null &&
      board[3][i] === null &&
      board[4][i] === null
    )
      return true
  }

  return false
}

for (let i = 0; i < draw.length; i++) {
  lastNum = draw[i]

  boards.forEach((board) => {
    const [x, y] = board.reduce(
      (res, line, index) => {
        const lineMatchIndex = line.indexOf(lastNum)

        if (lineMatchIndex > -1) return [lineMatchIndex, index]

        return res
      },
      [null, null],
    )

    if (x !== null && y !== null) board[y][x] = null
  })

  winnerBoard = boards.find(isWinner)

  if (winnerBoard) {
    break
  }
}

const sumNums = winnerBoard
  .flat(2)
  .reduce((acc, curr) => (curr !== null ? acc + curr : acc), 0)

console.log(sumNums * lastNum)
