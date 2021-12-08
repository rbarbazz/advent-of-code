import { input as crabs } from './input'

const maxPos = Math.max(...crabs)
let res

for (let i = 0; i < maxPos; i++) {
  let totalFuel = 0

  for (let j = 0; j < crabs.length; j++) {
    totalFuel += Math.abs(i - crabs[j])
  }

  if (!res || totalFuel < res) res = totalFuel
}

console.log(res)
