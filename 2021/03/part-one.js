const { input: binaryNums } = require('./input')

let zeroCount = 0
let oneCount = 0
let gammaRateStr = ''
let epsilonRateStr = ''

for (let i = 0; i < binaryNums[0].length; i++) {
  zeroCount = 0
  oneCount = 0

  binaryNums.forEach((binaryNum) => {
    if (binaryNum[i] === '0') zeroCount += 1
    if (binaryNum[i] === '1') oneCount += 1
  })

  gammaRateStr += zeroCount > oneCount ? '0' : '1'
  epsilonRateStr += zeroCount > oneCount ? '1' : '0'
}

const gammaRate = parseInt(gammaRateStr, 2)
const epsilonRate = parseInt(epsilonRateStr, 2)

console.log(gammaRate * epsilonRate)
