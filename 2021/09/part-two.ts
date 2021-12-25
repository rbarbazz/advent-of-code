import { input as map } from './input'

const basins = []

// Returns true if all adjacent points are higher
const isLowestPoint = (x: number, y: number) => {
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

for (let y = 0; y < map.length; y++) {
  for (let x = 0; x < map[y].length; x++) {
    if (isLowestPoint(x, y)) {
      let basinSize = 0

      const isBasin = (x: number, y: number) => {
        // up
        if (map[y - 1]?.[x] < 9) {
          basinSize += 1
          map[y - 1][x] = 9

          isBasin(x, y - 1)
        }
        // down
        if (map[y + 1]?.[x] < 9) {
          basinSize += 1
          map[y + 1][x] = 9

          isBasin(x, y + 1)
        }
        // left
        if (map[y][x - 1] < 9) {
          basinSize += 1
          map[y][x - 1] = 9

          isBasin(x - 1, y)
        }
        // right
        if (map[y][x + 1] < 9) {
          basinSize += 1
          map[y][x + 1] = 9

          isBasin(x + 1, y)
        }
      }

      isBasin(x, y)
      basins.push(basinSize)
    }
  }
}

basins.sort((a, b) => a - b)

const res = basins.slice(-3).reduce((acc, num) => acc * num, 1)

console.log(res)
