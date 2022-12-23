import { readInput } from '../../utils/readInput'

export const parsedHands = readInput(__dirname)
  .trim()
  .split('\n')
  .map((hand) => hand.replace(' ', ''))

let res = 0

export const isRock = (hand: string) => 'AX'.includes(hand)
export const isPaper = (hand: string) => 'BY'.includes(hand)
export const isScissors = (hand: string) => 'CZ'.includes(hand)

const wins = (hands: string) => ['BZ', 'AY', 'CX'].includes(hands)
const draws = (hands: string) => ['AX', 'BY', 'CZ'].includes(hands)

parsedHands.forEach((hands) => {
  if (draws(hands)) res += 3
  if (wins(hands)) res += 6

  if (isRock(hands[1])) res += 1
  if (isPaper(hands[1])) res += 2
  if (isScissors(hands[1])) res += 3
})

console.log('Part one:', res)
