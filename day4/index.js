const input = require("./input")
const { log, range } = require("../index")

let passports = input
  .trim()
  .split("\n")
  .map((row) => row.trim())
  .map((row) => (row == "" ? "," : row))
  .join(",")
  .split(",,,")

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]

const countValidPassports = (total, passport) => {
  let isInValid = requiredFields
    .map((f) => passport.includes(f))
    .includes(false)

  return isInValid ? (total += 0) : (total += 1)
}

let part1 = passports.reduce(countValidPassports, 0)

//Part 2

const validations = {
  byr: (n) => range([1920, 2002]).includes(parseInt(n)),
  iyr: (n) => range([2010, 2020]).includes(parseInt(n)),
  eyr: (n) => range([2020, 2030]).includes(parseInt(n)),
  hgt: (n) => {
    let test = {
      cm: (n) => range([150, 193]).includes(parseInt(n)),
      in: (n) => range([59, 76]).includes(parseInt(n)),
    }
    let key = n.slice(n.length - 2)
    let value = parseInt(n.split(key)[0])

    return typeof test[key] == "function" ? test[key](value) : false
  },
  hcl: (n) => n.startsWith("#") && n.substring(1).length == 6,
  ecl: (n) => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(n),
  pid: (n) => {
    log("pid")(n.toString().length)
    return n.toString().length == 9
  },
  cid: (n) => true,
}

const validateField = (test) => ([key, value]) => test[key](value)

const validatePassports = (total, passport) => {
  let passP = passport
    .split(",")
    .flatMap((f) => f.split(" "))
    .map((f) => f.split(":"))
    .map(validateField(validations))

  let isValid = !passP.includes(false)

  isValid && (total += 1)
  return total
}

let part2 = passports.reduce(validatePassports, 0)
log("part2")(part2)
