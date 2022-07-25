const container = document.querySelector("div.container"); 
container.textContent = 0; 
for(let i = 0; i < 16; i++) {
    for(let k = 0; k < 16; k++) {
        let squareDiv = document.createElement("div"); 
        squareDiv.setAttribute("row",i); 
        squareDiv.setAttribute("col",k); 
        container.appendChild(squareDiv); 
    }
}


