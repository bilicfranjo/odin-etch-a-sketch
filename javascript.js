function createDivs(size) {

    const container = document.querySelector(".container");
    container.innerHTML = "";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = "640px";
    container.style.height = "640px";

    const cellSize = 640 / size;

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            container.appendChild(cell);


            cell.addEventListener("mouseenter", () => {
                cell.style.backgroundColor = getRandomColor();
            });
        }
    }

}

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach(cell => {
        cell.style.backgroundColor = "white";
    });

});

let changeGridBtn = document.querySelector(".changeGridBtn");

changeGridBtn.addEventListener("click", () => {
    let size = prompt("Size of the grid (1-100): ");

    if(size >= 1 && size <= 100){
        createDivs(size);
    }
    else{
        alert("Invalid number!");
    }

});



createDivs(16);