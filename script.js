const container = document.querySelector("div.container"); 
const slider = document.querySelector("input[type=range]");
const sliderOutput = document.querySelector(".grid-size"); 

//display slider value 
sliderOutput.textContent = slider.value + " x " + slider.value; 
slider.oninput = () => {
    sliderOutput.textContent = slider.value + " x " + slider.value; 
}


//check if mouse is down or not
let isDown = false;
document.querySelector(".container").onmousedown = () => isDown = true; 
document.querySelector(".container").onmouseup = () => isDown = false;

//create the grid 
for(let i = 0; i < 16; i++) {
    for(let k = 0; k < 16; k++) {
        let squareDiv = document.createElement("div"); 
        squareDiv.setAttribute("row",i+1); 
        squareDiv.setAttribute("col",k+1); 
        squareDiv.classList.add("square-div"); 
        container.appendChild(squareDiv); 
    }
}

//etch if mouse down and over
const squareDivs = document.querySelectorAll(".square-div");
squareDivs.forEach((squareDiv) => { 
   squareDiv.addEventListener("mouseenter",(e) => {
    if (isDown) {
        e.target.style.backgroundColor = "gray"; 
    }
   });
});

