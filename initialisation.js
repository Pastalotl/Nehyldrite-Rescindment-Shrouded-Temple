const canvas = document.getElementById("game") /*grab canvas*/
const ctx = canvas.getContext('2d') /*context for drawing on canvas*/
const defaultWidth = 320
const defaultHeight = 180
let scale = Math.floor(window.innerWidth/defaultWidth) > Math.floor(window.innerHeight/defaultHeight) ? 
              Math.floor(window.innerHeight/defaultHeight) : 
              Math.floor(window.innerWidth/defaultWidth) /*finds the largest possible integer scale value that the canvas can take up and saves it so everything can be resized uniformly*/
canvas.width = defaultWidth * scale /*set the width and height according to scale*/
canvas.height = defaultHeight * scale
centre = {x: canvas.width / 2, y: canvas.height / 2}

if(canvas.width == window.innerWidth && canvas.height == window.innerHeight){
    canvas.style.border = "0px"
    canvas.style.borderRadius = "0px"
}

console.log("initialisation:", canvas.width +" x " + canvas.height + " (scale: " + scale + ")")




function rescale(){
  //console.log(window.height,window.width)
  scale = Math.floor(window.innerWidth/320) > Math.floor(window.innerHeight/180) ? Math.floor(window.innerHeight/180) : Math.floor(window.innerWidth/320) /*finds the largest possible integer scale value that the canvas can take up and saves it so everything can be resized uniformly*/
  canvas.width = 320 * scale /*set the width and height according to scale*/
  canvas.height = 180 * scale
  centre = {x: 160 * scale, y: 90 * scale}
  ctx.imageSmoothingEnabled = false
  if(canvas.width == window.innerWidth && canvas.height == window.innerHeight){
    canvas.style.border = "0px"
    canvas.style.borderRadius = "0px"
  }
  else{
    canvas.style.border = ""
    canvas.style.borderRadius = ""
  }
  console.log(`rescaled to: ${canvas.width} x ${canvas.height} (scale: ${scale})`)
  //renderLoop()
}

/*floor0*/
let cam = {x:0, y:0}
console.log("camera created")

ctx.imageSmoothingEnabled = false
console.log("Rendering defined")

window.addEventListener("resize",rescale)

let entityRecipes = undefined
let charRecipes = undefined