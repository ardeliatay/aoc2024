const rawInput = require('./input')
const input = rawInput.trim().split('\n')

let safeCount = 0

for (let i = 0; i < input.length; i++) {
  const report = input[i].split(/\s+/)
  let direction;
  for (let j = 0; j < report.length; j++) {
    const diff = Math.abs(report[j] - report[j + 1])
    if (j === 0) {
      direction = report[j] - report[j + 1] > 0 ? 'dec' : 'inc';
    }
    if (diff > 3 || diff < 1) break;
    if (direction === 'inc' && report[j] - report[j + 1] > 0) break;
    if (direction === 'dec' && report[j] - report[j + 1] < 0) break;
    safeCount++;
  }
}

console.log(safeCount)