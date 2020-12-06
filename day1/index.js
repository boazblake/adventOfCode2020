const { input } = require("./input.js")
const multi = (total, next) => total * next

//part 1
// find the two numbers that sum to 2020, and return the product of those two numbers
// const findPairs = (total, next) =>
//   input.includes(total - next) ? next * (total - next) : total
//
// let result = input.reduce(findPairs,2020)

//part 2
// find the three numbers that sum to 2020 and return the product of those
// const findTrips = (inputs) => (total) => (next) => {
//   let current = total - next
//   let pairs = inputs.reduce(findPairs, current)

//   if (pairs !== current) {
//     return [current, pairs]
//   }
// }

// input.filter(findTrips(input)(2020)).reduce(multi, 1)
