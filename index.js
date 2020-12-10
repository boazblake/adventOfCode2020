const log = (m) => (v) => {
  console.log(m, v)
  return v
}

const range = ([from, to]) => {
  var result = []
  var n = from
  while (n <= to) {
    result.push(n)
    n += 1
  }
  return result
}

const multi = (total, next) => total * next

module.exports = {
  multi,
  log,
  range,
}
