import fs from 'fs'

export const readInput = (path: string) =>
  fs.readFileSync(`${path}/input.txt`, 'utf8')
