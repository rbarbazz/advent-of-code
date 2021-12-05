const { input: binaryNums } = require('./input')

let mostCommonStr = ''
let leastCommonStr = ''
let remainingOxygenNums = binaryNums
let remainingCo2Nums = binaryNums

/**
 * @param {string[]} nums
 * @param {number} index
 */
const countValues = (nums, index) => {
  let zeroCount = 0
  let oneCount = 0

  nums.forEach((num) => {
    if (num[index] === '0') zeroCount += 1
    if (num[index] === '1') oneCount += 1
  })

  return [zeroCount, oneCount]
}

/**
 * @param {string[]} remainingNums
 * @param {string} str
 * @returns {string[]}
 */
const filterRemainingNums = (remainingNums, str) =>
  remainingNums.filter((remainingNum) => remainingNum.startsWith(str))

for (let i = 0; i < binaryNums[0].length; i++) {
  if (remainingOxygenNums.length > 1) {
    const [zeroCount, oneCount] = countValues(remainingOxygenNums, i)
    mostCommonStr += oneCount >= zeroCount ? '1' : '0'
    remainingOxygenNums = filterRemainingNums(
      remainingOxygenNums,
      mostCommonStr,
    )
  }

  if (remainingCo2Nums.length > 1) {
    const [zeroCount, oneCount] = countValues(remainingCo2Nums, i)
    leastCommonStr += zeroCount <= oneCount ? '0' : '1'
    remainingCo2Nums = filterRemainingNums(remainingCo2Nums, leastCommonStr)
  }

  if (remainingOxygenNums.length === 1 && remainingCo2Nums.length === 1) break
}

const oxygenRate = parseInt(remainingOxygenNums[0], 2)
const co2Rate = parseInt(remainingCo2Nums[0], 2)

console.log(oxygenRate * co2Rate)
