const container = document.querySelector("div.container"); 
let isDown = false;
document.querySelector(".container").onmousedown = () => isDown = true; 
document.querySelector(".container").onmouseup = () => isDown = false;

for(let i = 0; i < 16; i++) {
    for(let k = 0; k < 16; k++) {
        let squareDiv = document.createElement("div"); 
        squareDiv.setAttribute("row",i+1); 
        squareDiv.setAttribute("col",k+1); 
        squareDiv.classList.add("square-div"); 
        container.appendChild(squareDiv); 
    }
}

const squareDivs = document.querySelectorAll(".square-div");
squareDivs.forEach((squareDiv) => { 
   squareDiv.addEventListener("mouseenter",(e) => {
    if (isDown) {
        e.target.style.backgroundColor = "gray"; 
    }
   });
});

