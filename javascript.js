
const container = document.querySelector(".container");

for (i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.addEventListener("mouseenter", () => {
        square.classList.add("hovered");
    });

    square.classList.add("grid-square");
    container.appendChild(square);
}

function clear() {
    container.innerHTML = '';
}

function resetGrid(size) {
    for (let i = 0; i < size*size; i++) {
        const square = document.createElement("div");
        square.addEventListener("mouseenter", () => {
            square.classList.add("hovered");
        });
        const squareSize = 512 / size;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`

        square.classList.add("grid-square");
        container.appendChild(square);
    }
}

const button = document.querySelector("#reset");

button.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter a new dimension for the grid."));
    clear();
    resetGrid(newSize);
});