let container = document.querySelector("div.container"); 
const slider = document.querySelector("input[type=range]");
const sliderOutput = document.querySelector(".grid-size"); 
const containerSize = 500
container.style.width = containerSize + "px";
container.style.height = containerSize + "px";
let slideVal = slider.value;  
makeGrid(slideVal); 

//display slider value 
sliderOutput.textContent = slider.value + " x " + slider.value; 
slider.oninput = () => {
    sliderOutput.textContent = slider.value + " x " + slider.value; 
    slideVal = slider.value; 
    makeGrid(slideVal); 
}

//check if mouse is down or not
let isDown = false;
document.querySelector(".container").onmousedown = () => isDown = true; 
document.querySelector(".container").onmouseup = () => isDown = false;

//function that creates the grid 
function makeGrid(size) {
    const width = Math.floor(containerSize/size);
    const height = Math.floor(containerSize/size);
    while(container.firstElementChild) {
        container.firstElementChild.remove();
    }
    for(let i = 0; i < size; i++) {
        let newRow = document.createElement("div");
        newRow.classList.add("row"); 
        for(let k = 0; k < size; k++) {
            let squareDiv = document.createElement("div"); 
            squareDiv.classList.add("square-div");
            squareDiv.style.width = width + "px"; 
            squareDiv.style.height = height + "px"; 
            newRow.appendChild(squareDiv); 
        }
        container.appendChild(newRow); 
    }
    //etch if mouse down and over
    const squareDivs = document.querySelectorAll(".square-div");
    squareDivs.forEach((squareDiv) => { 
       squareDiv.addEventListener("mouseover",(e) => {
        if (isDown) {
            e.target.style.backgroundColor = "gray"; 
        }
       });
    });
}


