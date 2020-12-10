const input = require("./input.js")
const { log } = require("../index")

const getMin = (str) => str.split("-")[0]
const getMax = (str) => str.split("-")[1]
const getChar = (str) => str.split(":")[0]

const forCorrectCharCount = ([minMax, _char, string]) => {
  const countStr = (str, char) => {
    let split = str.split("")
    return split.filter((c) => (c == char ? c : "")).length
  }
  let min = getMin(minMax)
  let max = getMax(minMax)
  let char = getChar(_char)
  let count = countStr(string, char)
  return count >= min && count <= max ? true : false
}

// part 1
let part1 = input.map(forCorrectCharCount).filter((b) => b == true).length
log("day2 part1")(part1)

//part 2
const hasCharInACorrectPlace = ([minMax, _char, string]) => {
  let min = parseInt(getMin(minMax)) - 1
  let max = parseInt(getMax(minMax)) - 1
  let char = getChar(_char)

  return (
    (string.charAt(min) == char || string.charAt(max) == char) &&
    !(string.charAt(min) == char && string.charAt(max) == char)
  )
}

let part2 = input.map(hasCharInACorrectPlace).filter((b) => b == true).length
log("day2 part2")(part2)
