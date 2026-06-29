let dob;
let tillDate;

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const dobInput = document.getElementById("dob-input");
const tillDateInput = document.getElementById("till-date-input");
const calculatorDisplay = document.getElementById("calculator-display");
calculatorDisplay.innerHTML =  "Hover over me to turn ON";

tillDate = `${year}-${month}-${day}`;
tillDateInput.value = `${year}-${month}-${day}`;

function changeDob(event){
    dob = event.target.value
    calculateAge()
}

function changeDateTill (event){
    tillDate = event.target.value
    calculateAge()
}

function calculateAge(){
    const startDate = new Date(dob);
    const endDate = new Date(tillDate);
    
    let yearDifference, monthDifference, dayDifference

    if (startDate.getMonth() > endDate.getMonth()) {
        yearDifference = endDate.getFullYear() - startDate.getFullYear() -1; 
        monthDifference = 12 - (startDate.getMonth() - endDate.getMonth());
    } else {
        yearDifference = endDate.getFullYear() - startDate.getFullYear();
        monthDifference = (endDate.getMonth() - startDate.getMonth());
    }

    console.log(startDate+"\n"+endDate);
    
    console.log(yearDifference, monthDifference);
    
    if (Number.isNaN(yearDifference) || Number.isNaN(monthDifference)){
        calculatorDisplay.innerHTML = `Invalid Input`;
    } else {
        calculatorDisplay.innerHTML = `Age: ${yearDifference} years and ${monthDifference} months`
    }
    
}

function clearDisplay(){
    calculatorDisplay.innerHTML = `Select date to calulate age`
    tillDateInput.value = `${year}-${month}-${day}`;
    dobInput.value = ``;
}

function turnOnCalculator() {
    if (calculatorDisplay.innerHTML ==  "Hover over me to turn ON") {
        calculatorDisplay.innerHTML = `Select date to calulate age`;
    }
    
}

function turnOffCalculator(){
    if (calculatorDisplay.innerHTML == `Select date to calulate age`) {
        calculatorDisplay.innerHTML =  "Hover over me to turn ON";
        return;
    }
    if (calculatorDisplay.innerHTML == `Invalid Input`) {
        tillDateInput.value = `${year}-${month}-${day}`;
        dobInput.value = ``;
        calculatorDisplay.innerHTML =  "Hover over me to turn ON";
        return;
    }
}