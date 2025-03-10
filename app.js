const colors = ["green", "red", "rgba(113,122,200)", "#f15025"]

const color = document.getElementById("color")
const btn = document.getElementById("btn")

//addEventListener click function för knappen "btn"

btn.addEventListener("click", function () {
  // målet är att får ett nr mellan 0 - 3 colors
  const randomNumber = getRandomNumber()
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}
