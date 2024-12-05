const isSafe = (report) => {
  let direction;
  for (let j = 0; j < report.length - 1; j++) {
    const diff = Math.abs(report[j] - report[j + 1]);
    if (j === 0) {
      direction = report[j] < report[j + 1] ? 'inc' : 'dec';
    }
    if (diff > 3 || diff < 1) return false;
    if (direction === 'inc' && report[j] > report[j + 1]) return false;
    if (direction === 'dec' && report[j] < report[j + 1]) return false;
  }
  return true;
}

module.exports = isSafe;