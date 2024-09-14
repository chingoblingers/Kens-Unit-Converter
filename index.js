const btn = document.getElementById('btn')
let volume = document.getElementById('volume')
let mass = document.getElementById('mass')
let length = document.getElementById('length')
let number = document.getElementById("number")

btn.addEventListener("click", function(input){
    volume.innerText = convertVolume(number)
    length.innerText = convertLength(number)
    mass.innerText = convertMass(number)
})

function convertLength(input) {
    let feetResult = input.value / 3.281
    let meterResult = input.value * 3.281

    return `${input.value} meters = ${meterResult.toFixed(3)} feet | ${input.value} feet = ${feetResult.toFixed(3)} meters`

}

function convertVolume(input) {
    let literResult = input.value / 0.264
    let gallonResult = input.value * 0.264

    return `${input.value} liters = ${gallonResult.toFixed(3)} gallons | ${input.value} gallons = ${literResult.toFixed(3)} liters`

}

function convertMass(input) {
    let kiloResult = input.value / 2.204
    let poundResult = input.value * 2.204

    return `${input.value} kilos = ${poundResult.toFixed(3)} pounds | ${input.value} pounds = ${kiloResult.toFixed(3)} kilos`

}
