import { parsedElves } from './part-one'

const elvesCalories = parsedElves
  .reduce<number[]>((acc, elf) => {
    const elfCalorie = elf.reduce(
      (total, cal) => (total += parseInt(cal, 10)),
      0,
    )

    return [...acc, elfCalorie]
  }, [])
  .sort()

const top3Elves = elvesCalories.slice(-3)

console.log(
  'Part two',
  top3Elves.reduce((acc, val) => (acc += val)),
)
