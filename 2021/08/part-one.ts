import { input } from './input'

let totalDigits = 0
const uniqueNumberSegments = [2, 3, 4, 7]

for (let i = 0; i < input.length; i++) {
  input[i].outputs.forEach((output) => {
    if (uniqueNumberSegments.includes(output.length)) totalDigits += 1
  })
}

console.log(totalDigits)
