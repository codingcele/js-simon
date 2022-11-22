
let button = document.getElementById("click")

const container = document.getElementById("container");

function randomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

button.addEventListener("click", function() {
    container.innerHTML = "";
    let numbers = [];
    while (numbers.length < 5) {
        let num = randomInteger(0, 100);
        if (!numbers.includes(num)) {
            numbers.push(num);
            const element = `<h2 class="num">${num}</h2>`;
            container.innerHTML += element;
        }
    }
    let seconds = 30;
    let rem = document.getElementById("remember");
    let ins = document.getElementById("insert");
    ins.innerHTML = "";
    let box = `<input type="text" name="numero" class="userNumber mrg-top-20-mrg-left-100"></input>`;
    let but = `<button type="button" id="controlla">Controlla</button>`
    timer = setInterval(function() {
        rem.innerHTML = "Hai " + seconds + " secondi per memorizzarli.";
        seconds--;
        if (seconds == -1) {
            clearInterval(timer);
            rem.innerHTML = "Inserisci i numeri:"
            numList = document.getElementsByClassName("num");
            ins.innerHTML += box;
            ins.innerHTML += box;
            ins.innerHTML += box;
            ins.innerHTML += box;
            ins.innerHTML += box;
            ins.innerHTML += but;
            let controlla = document.getElementById("controlla");
            controlla.addEventListener("click", function() {
                let textAreaNumInseriti = document.getElementsByClassName("userNumber");
                console.log(textAreaNumInseriti);
                let numInseriti = [];
                let i = 0;
                while (i < textAreaNumInseriti.length) {
                    let elem = textAreaNumInseriti[i];
                    let val = elem.value;
                    numInseriti.push(val);
                    i++;
                }
                let counter = 0;
                let indovinati = [];
                let k = 0;
                while (k < textAreaNumInseriti.length) {
                    let elem = textAreaNumInseriti[k];
                    let val = elem.value;
                    if (numbers.includes(parseInt(val))) {
                        counter++;
                        indovinati.push(parseInt(val));
                    }
                    k++;
                }
                let indo = document.getElementById("indovinati");
                indo.innerHTML = `Hai indovinato ${counter} numeri: `
                for (let i = 0; i < indovinati.length; i++) {
                    let nmb = indovinati[i];
                    indo.innerHTML += nmb + " ";
                }
            })
                let g = 0;
                while (g < 5) {
                numList[g].classList.add("dis");
                g++;
            }
        }
    }, 1000)
})