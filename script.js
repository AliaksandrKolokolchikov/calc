const number = document.querySelectorAll(".number");
const opiracions = document.querySelectorAll(".opiracion");
const clears = document.querySelector(".clear");
const results = document.querySelector(".result");
const windows = document.querySelector(".window");
const dots = document.querySelector(".dot");

console.log(number);

number.forEach((number) => {
    number.addEventListener('click', (e) => {
        numberPress(e.target.textContent)
    })
})
function numberPress(number) {
    if (windows.value === "") {
        windows.value = number;
    } else {
        windows.value += number;
    }
}

opiracions.forEach((opiracions) => {
    opiracions.addEventListener('click', (e) => {
        opiracionsPress(e.target.textContent)
    })
})

function opiracionsPress(opiracions) {
    if (windows.value === "") {
        windows.value = opiracions;
    } else {
        windows.value += opiracions;
    }
}
