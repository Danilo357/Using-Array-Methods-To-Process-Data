// number 1

var sum = items.reduce((a, b) => a + b.price, 0)
console.log()
var avg = sum / items.length

document.querySelector(
  "#answer1"
).innerHTML = `The avg of all prices is $${avg.toFixed(2)}`

// number 2

var newArr = items.filter(function(a) {
  return a.price > 14 && a.price < 18
})
var show = newArr
  .map(function(a) {
    return a.title
  })
  .join("\n\n")
console.log()

document.querySelector("#answer2").innerHTML = ` ${show}`

// number 3

var one = items.filter(items => items.currency_code === "GBP")
var two = one.map(one => one.title)
var tree = one.map(one => one.price)

document.querySelector("#answer3").innerHTML = `${two} price ${tree}`

// number 4

var list = items.filter(function(a) {
  return a.materials.includes("wood")
})

var newlist = list
  .map(function(a) {
    return a.title
  })
  .join("\n")

document.querySelector("#answer4").innerHTML = `${newlist} `

// number 5

var materialnumber = items
  .filter(item => item.materials.length >= 8)
  .map(item => {
    let html = `${item.title} has ${item.materials.length} materials:`
    item.materials.forEach(material => {
      html += `\n${material}`
    })

    return html
  })
  .join("\n")

document.querySelector("#answer5").innerHTML = materialnumber

// number 6

var oda = items.filter(made => {
  let madeby = made.who_made

  if (madeby === "i_did") {
    return madeby
  }
})

document.querySelector(
  "#answer6"
).innerHTML = `${oda.length} were made by their sellers `
