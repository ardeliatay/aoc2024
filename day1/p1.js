const rawInput = require('./input');
const input = rawInput.trim().split('\n')

const left = []
const right = []

input.forEach(row => {
  const [ num1, num2 ] = row.split(/\s+/)
  left.push(num1)
  right.push(num2)
})

const sortedLeft = left.sort((a, b) => a - b)
const sortedRight = right.sort((a, b) => a - b)

const distances = sortedLeft.map((num, index) => {
  return Math.abs(num - sortedRight[index])
})

const totalDistance = distances.reduce((acc, curr) => acc + curr, 0)
console.log(totalDistance)