import { isPaper, isRock, isScissors, parsedHands } from './part-one'

let res = 0

const draws = (hand: string) => hand === 'Y'
const wins = (hand: string) => hand === 'Z'

parsedHands.forEach((hands) => {
  if (draws(hands[1])) {
    res += 3

    if (isRock(hands[0])) res += 1
    if (isPaper(hands[0])) res += 2
    if (isScissors(hands[0])) res += 3
  } else if (wins(hands[1])) {
    res += 6

    if (isRock(hands[0])) res += 2
    if (isPaper(hands[0])) res += 3
    if (isScissors(hands[0])) res += 1
  } else {
    if (isRock(hands[0])) res += 3
    if (isPaper(hands[0])) res += 1
    if (isScissors(hands[0])) res += 2
  }
})

console.log('Part two:', res)
