
// =====1=====

const jDiv = document.querySelector(".just-div")
const jImg = document.querySelector(".just-img")
const image = document.querySelectorAll('.image') 
const imgContainer = document.querySelector('.full-image-container') 
const fullImage = document.querySelector('.full-image') 

let currentIndex = 0
image.forEach( (img, index) => {    
    img.addEventListener('click', () => {
        jImg.classList.add("full-image")
        jImg.src = img.src
        jImg.style.display = "block"
    })
    currentIndex = index

})
jDiv.addEventListener('click', () => {
    jImg.classList.remove("full-image")
    jImg.style.display = "none"
  })
  let key = 0
  document.addEventListener("keydown", function (event) {
      let key = event.key
      if (key === "ArrowRight" && currentIndex !== image.length-1) {
          currentIndex += 1
          jImg.src = image[currentIndex].src

      } 
      else if (key === "ArrowLeft" && currentIndex !== 0) {
          currentIndex -= 1
          jImg.src = image[currentIndex].src
      }
  })

// =====2=====

const amount = document.querySelector(".input")
const btnRender = document.querySelector('[data-action="render"]')
const btnDestrtoy = document.querySelector('[data-action="destroy"]')
const boxesContainer = document.querySelector("#boxes")

btnRender.addEventListener("click", createBoxes)
btnDestrtoy.addEventListener("click", destroyBoxes)

function getRandomColor() {
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function createBoxes() {
  boxesContainer.innerHTML = ""

  let size = 30;

  for (let i = 0; i < amount.value; i++) {
      const box = document.createElement('div')
      box.classList.add('box')
      box.style.backgroundColor = getRandomColor()
      box.style.width = `${size}px`
      box.style.height = `${size}px`

      boxesContainer.appendChild(box)

      size += 10
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = ""
}






















