
const container = document.querySelector(".container");

for (i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.addEventListener("mouseenter", () => {
        square.classList.add("hovered");
    });

    square.classList.add("grid-square");
    container.appendChild(square);
}