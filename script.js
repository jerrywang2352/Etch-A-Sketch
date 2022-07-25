const body = document.querySelector("body"); 
for(let i = 0; i < 16; i++) {
    for(let k = 0; k < 16; k++) {
        let squareDiv = document.createElement("div"); 
        body.appendChild(squareDiv); 
    }
}

