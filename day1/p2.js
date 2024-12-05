const rawInput = require('./input');
const input = rawInput.trim().split('\n')

const left = []
const right = []

input.forEach(row => {
  const [ num1, num2 ] = row.split(/\s+/)
  left.push(num1)
  right.push(num2)
})

const similarityScores = left.map(leftNum => (right.filter(rightNum => leftNum === rightNum).length) * leftNum)
console.log(similarityScores)

const totalSimilarityScore = similarityScores.reduce((acc, curr) => acc + curr, 0)
console.log(totalSimilarityScore)