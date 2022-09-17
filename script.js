const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);

}
const colorContainerEls = document.querySelectorAll(".color-container")

function generateColors() {
    colorContainerEls.forEach((colorContainerEl) => {
        const rcolor = randomColor();
        colorContainerEl.style.backgroundColor = "#" + rcolor;
        colorContainerEl.innerHTML = "#" + rcolor;
    })
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorcodelength = 6;
    let color = "";
    for (let index = 0; index < colorcodelength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomNum, randomNum + 1)

    }
    return color;
}

generateColors()