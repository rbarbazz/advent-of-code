import benchmarkFn from '../../utils/benchmark'
import { input } from './input'

// Implements the O(n²) solution described here: https://en.wikipedia.org/wiki/3SUM#Quadratic_algorithm

const threeSum = () => {
  const sortedInput = input.sort((a, b) => a - b)

  for (let i = 0; i < sortedInput.length - 1; i++) {
    const val1 = sortedInput[i]
    let start = i + 1
    let end = sortedInput.length - 1

    while (start < end) {
      const val2 = sortedInput[start]
      const val3 = sortedInput[end]

      if (val1 + val2 + val3 === 2020) {
        // There is only one solution so no need to continue here
        return [val1, val2, val3]
      } else if (val1 + val2 + val3 > 2020) {
        end = end - 1
      } else {
        start = start + 1
      }
    }
  }

  return []
}

const [val1, val2, val3] = benchmarkFn(threeSum)

console.log(val1 * val2 * val3)
