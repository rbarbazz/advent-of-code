import { readInput } from '../../utils/readInput'

let maxCal = 0

export const parsedElves = readInput(__dirname)
  .trim()
  .split('\n\n')
  .map((elf) => elf.split('\n'))

parsedElves.forEach((elf) => {
  const elfCalorie = elf.reduce((total, cal) => (total += parseInt(cal, 10)), 0)

  if (elfCalorie > maxCal) {
    maxCal = elfCalorie
  }
})

console.log('Part one:', maxCal)
