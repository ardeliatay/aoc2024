const rawInput = require('./input')
const input = rawInput.trim().split('\n')
const isSafe = require('./utils')

let safeCount = 0

for (let i = 0; i < input.length; i++) {
  const report = input[i].split(/\s+/)
  if (isSafe(report)) {
    safeCount++;
  }
}

console.log(safeCount)