import { input } from './input'

let fishList = input

for (let day = 0; day < 80; day++) {
  let fishToAddCount = 0

  fishList = fishList.map((fish) => {
    if (fish === 0) {
      fishToAddCount += 1
      return 6
    } else {
      return fish - 1
    }
  })

  fishList = [...fishList, ...Array(fishToAddCount).fill(8)]
}

console.log(fishList.length)
