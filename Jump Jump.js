const canvas = document.querySelector("canvas")

// selects the canvas as the item to be operated on

const c = canvas.getContext("2d")

// sets the canvas as a 2d space on which we can draw

c.fillRect(0,0,200,200)
c.fillStyle = "white"

// the color and size of the canvas

canvas.width =  1024
canvas.height = 576

// 