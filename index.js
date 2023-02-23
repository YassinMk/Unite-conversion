/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl=document.getElementById("input-el")
const outputLenght=document.getElementById("output-length")
const outputVolum=document.getElementById("output-volum")
const convertbtn=document.getElementById("convert-btn")
const outputMass=document.getElementById("output-mass")
const meterTofeet=3.281
const literTogallon=0.264
const kilogramTopound=2.204



convertbtn.addEventListener("click",function(){
    if(inputEl.value !="") {
        console.log("button convert clicked");
        render()
    }
   
})

function render()
{   
   outputLenght.textContent=`${inputEl.value} meters = ${parseFloat(inputEl.value)*meterTofeet} feet | ${inputEl.value} feet = ${(parseFloat(inputEl.value)/meterTofeet).toFixed(2)} meters`
   
   outputVolum.textContent=`${inputEl.value} liters = ${parseFloat(inputEl.value)*literTogallon} gallons | ${inputEl.value} gallons = ${(parseFloat(inputEl.value)/literTogallon).toFixed(2)} liters`
   
   outputMass.textContent=`${inputEl.value} kilos = ${(parseFloat(inputEl.value)*kilogramTopound).toFixed(2)} pounds | ${inputEl.value} pounds = ${(parseFloat(inputEl.value)/kilogramTopound).toFixed(2)} kilos`
}
