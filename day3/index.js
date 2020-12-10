const input = require("./input")
const { log, multi } = require("../index")

const isTree = (char) => char == "#"

const countTrees = (total, n) => {
  isTree(n) && (total += 1)
  return total
}

let diagLength = (input) => (right) => (down) =>
  input
    .map((line, idx) => {
      console.log(line)
      return down > 1
        ? idx % down !== 0
          ? line.charAt((idx * right) % line.length)
          : "."
        : line.charAt((idx * right) % line.length)
    })
    .reduce(countTrees, 0)

let right1Down1 = diagLength(input)(1)(1)
let right3Down1 = diagLength(input)(3)(1)
let right5Down1 = diagLength(input)(5)(1)
let right7Down1 = diagLength(input)(7)(1)
let right1Down2 = diagLength(input)(1)(2)
let allMulti = [right1Down1, right3Down1, right5Down1, right7Down1, right1Down2] //.reduce(multi, 1)
log("total")(allMulti)
