import { Line, lines, maxX, maxY } from './input'

const map: number[][] = Array.from(Array(maxY + 1), () =>
  new Array(maxX + 1).fill(0),
)

const writeLines = ({ x1, y1, x2, y2 }: Line) => {
  // Vertical line
  if (x1 === x2) {
    const start = y1 < y2 ? y1 : y2
    const end = start === y1 ? y2 : y1

    for (let i = start; i <= end; i++) {
      map[i][x1] += 1
    }
  }
  // Horizontal line
  else if (y1 === y2) {
    const start = x1 < x2 ? x1 : x2
    const end = start === x1 ? x2 : x1

    for (let i = start; i <= end; i++) {
      map[y1][i] += 1
    }
  }
  // Diagonal line
  else {
    const isGoingRight = x1 < x2
    const isGoingDown = y1 < y2
    const shouldContinueX = (i: number) => (isGoingRight ? i <= x2 : i >= x2)
    const shouldContinueY = (j: number) => (isGoingDown ? j <= y2 : j >= y2)

    for (let i = x1, j = y1; shouldContinueX(i) && shouldContinueY(j); ) {
      map[j][i] += 1

      if (shouldContinueX(i)) isGoingRight ? i++ : i--
      if (shouldContinueY(j)) isGoingDown ? j++ : j--
    }
  }
}

lines.forEach(writeLines)

const res = map.flat(2).reduce((acc, val) => (val >= 2 ? (acc += 1) : acc), 0)

console.log(res)
