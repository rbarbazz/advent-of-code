import fs from 'fs'
import path from 'path'

export const input = fs
  .readFileSync(path.join(__dirname.replace('/dist', ''), 'input.txt'), 'utf8')
  .trim()
  .split('\n')
  .map((line) => {
    const [policy, password] = line.split(': ')
    const [numChar, char] = policy.split(' ')
    const [min, max] = numChar.split('-')

    return {
      char,
      maxChar: parseInt(max, 10),
      minChar: parseInt(min, 10),
      password,
    }
  })
