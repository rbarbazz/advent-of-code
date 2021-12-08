import { input } from './input'

let startAgesDict = input.reduce((acc, curr) => {
  if (acc[curr] > 0) return { ...acc, [curr]: acc[curr] + 1 }
  else return { ...acc, [curr]: 1 }
}, {} as { [key: string]: number })
const agesList = [...Array(9).keys()].reverse()

for (let day = 0; day < 256; day++) {
  const agesDict = {} as { [key: string]: number }

  agesList.forEach((key) => {
    const value = startAgesDict[key]

    if (!value) return
    if (key === 0) {
      agesDict['6'] = (agesDict['6'] || 0) + value
      agesDict['8'] = value
    } else if (key === 8) {
      agesDict[key - 1] = value
    } else {
      agesDict[key - 1] = value
    }
  })

  startAgesDict = { ...agesDict }
}

console.log(Object.values(startAgesDict).reduce((acc, curr) => acc + curr, 0))
