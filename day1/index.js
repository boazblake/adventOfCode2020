const { input } = require("./input.js")
const { log, multi } = require("../index")
//part 1
// find the two numbers that sum to 2020, and return the product of those two numbers
const findPairs = (total, next) =>
  input.includes(total - next) ? next * (total - next) : total
//
let part1 = input.reduce(findPairs, 2020)
log("day1 part1")(part1)

//part 2
// find the three numbers that sum to 2020 and return the product of those
const findTrips = (inputs) => (total) => (next) => {
  let current = total - next
  let pairs = inputs.reduce(findPairs, current)

  if (pairs !== current) {
    return [current, pairs]
  }
}

let part2 = input.filter(findTrips(input)(2020)).reduce(multi, 1)
log("day1 part2")(part2)
