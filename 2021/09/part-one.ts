import { input } from './input'

let totalRiskLevel = 0

// Returns true if all adjacent points are higher
const isLowestPoint = (map: number[][], x: number, y: number) => {
  const val = map[y][x]
  const up = y - 1 < 0 ? true : map[y - 1][x] > val
  const down = y + 1 === map.length ? true : map[y + 1][x] > val
  const left = x - 1 < 0 ? true : map[y][x - 1] > val
  const right = x + 1 === map[y].length ? true : map[y][x + 1] > val

  if ([up, down, left, right].every((pos) => pos === true)) {
    return true
  }

  return false
}

for (let y = 0; y < input.length; y++) {
  for (let x = 0; x < input[y].length; x++) {
    if (isLowestPoint(input, x, y)) totalRiskLevel += input[y][x] + 1
  }
}

console.log(totalRiskLevel)
