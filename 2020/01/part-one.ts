import benchmarkFn from '../../utils/benchmark'
import { input } from './input'

const twoSum = () => {
  const valMap = {} as { [index: number]: boolean }

  for (let i = 0; i < input.length; i++) {
    const rest = 2020 - input[i]

    if (valMap[rest]) {
      return [input[i], rest]
    }

    valMap[input[i]] = true
  }

  return []
}

const [val1, val2] = benchmarkFn(twoSum)

console.log(val1 * val2)
