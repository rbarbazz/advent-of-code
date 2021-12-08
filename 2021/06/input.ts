import fs from 'fs'
import path from 'path'

export const input = fs
  .readFileSync(path.join(__dirname.replace('/dist', ''), 'input.txt'), 'utf8')
  .trim()
  .split(',')
  .map((fish) => parseInt(fish, 10))
