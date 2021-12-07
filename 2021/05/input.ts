import fs from 'fs'
import path from 'path'

const input = fs
  .readFileSync(path.join(__dirname.replace('/dist', ''), 'input.txt'), 'utf8')
  .trim()

export type Line = { x1: number; x2: number; y1: number; y2: number }
export let maxX = 0
export let maxY = 0
export const lines = input.split('\n').map((line) => {
  const [start, end] = line.split(' -> ')
  const [x1Str, y1Str] = start.split(',')
  const [x2Str, y2Str] = end.split(',')
  const x1 = parseInt(x1Str, 10)
  const x2 = parseInt(x2Str, 10)
  const y1 = parseInt(y1Str, 10)
  const y2 = parseInt(y2Str, 10)

  if (x1 > maxX) maxX = x1
  if (x2 > maxX) maxX = x2
  if (y1 > maxY) maxY = y1
  if (y2 > maxY) maxY = y2

  return { x1, x2, y1, y2 }
})
