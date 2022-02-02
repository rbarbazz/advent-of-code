import benchmarkFn from '../../utils/benchmark'
import { input } from './input'

const getValidPasswords = () => {
  return input.reduce((totalValid, { char, maxChar, minChar, password }) => {
    const charCount = password.split(char).length - 1

    if (minChar <= charCount && charCount <= maxChar) {
      return totalValid + 1
    }

    return totalValid
  }, 0)
}

const res = benchmarkFn(getValidPasswords)

console.log(res)
