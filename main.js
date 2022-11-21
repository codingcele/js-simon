
let button = document.getElementById("click")

const container = document.getElementById("container");

const rem = document.getElementById("remember");

function randomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

button.addEventListener("click", function() {
    container.innerHTML = "";
    rem.innerHTML = "Hai 30 secondi per memorizzarli."
    let numbers = [];
    while (numbers.length < 5) {
        let num = randomInteger(0, 100);
        if (!numbers.includes(num)) {
            numbers.push(num);
            const element = `<h2 class="num">${num}</h2>`;
            container.innerHTML += element;
        }
    }
})