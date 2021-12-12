import fs from 'fs'
import path from 'path'

export const input = fs
  .readFileSync(path.join(__dirname.replace('/dist', ''), 'input.txt'), 'utf8')
  .trim()
  .split('\n')
  .map((line) => line.split('').map((strVal) => parseInt(strVal, 10)))
