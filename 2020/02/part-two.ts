import benchmarkFn from '../../utils/benchmark'
import { input } from './input'

const getValidPasswords = () => {
  return input.reduce(
    (totalValid, { char, maxChar: pos1, minChar: pos2, password }) => {
      const charCount =
        `${password[pos1 - 1]}${password[pos2 - 1]}`.split(char).length - 1

      if (charCount === 1) {
        return totalValid + 1
      }

      return totalValid
    },
    0,
  )
}

const res = benchmarkFn(getValidPasswords)

console.log(res)
