/**
 *Initial function for the calculator
 which wil calculate the BMI
 */

let heightInp = document.getElementById("height");
let weightInp = document.getElementById("weight");
let bmiResult = document.getElementById("result");

function calculateBMI() {

  var height = parseFloat(heightInp.value);
  var weight = parseFloat(weightInp.value);

  if (isNaN(weight) || isNaN(height)) {
    bmiResult.innerHTML = alert("Please enter valid height and weight.");
  }

  var bmi = weight / ((height / 100) ** 2);
  var classification = "";

  /**
   * Tell the result to the user and
   * tell the user in their BMI
   */
  if (bmi > 1 && bmi <= 16) {
    classification = "Severly underweight"
  } else if (bmi > 16 && bmi <= 18.5) {
    classification = "Underweight"
  } else if (bmi > 18.5 && bmi <= 24) {
    classification = "Optimal weight"
  } else if (bmi > 24 && bmi <= 29) {
    classification = "Overweight"
  } else if (bmi > 29 && bmi <= 39) {
    classification = "Obese"
  } else if (bmi > 39 && bmi <= 60) {
    classification = "Severly obese"
  }

  bmiResult.innerHTML = "Your BMI is: " + bmi.toFixed(2) + 
  " (This means that you are: " + classification + ")";

}

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
  }

function closePopup() {
  popup.classList.remove("open-popup");
}

/**
 * Function to add the amount of fluids drank 
 * and return the total amount inputed 
 */
const fluidInputValue = document.getElementById("fluids");
const totalAmountValue = document.getElementById("total-amount");
const fluidsButton = document.getElementById("add-fluids-btn")

function addFluids() {

  console.log(typeof fluidInputValue.value)
  console.log(typeof totalAmountValue.textContent)


  //Covert values to number type

  fluidInputValueToNumber = Number(fluidInputValue.value)
  totalAmountValueToNumber = Number(totalAmountValue.textContent)
  console.log(typeof fluidInputValueToNumber)
  console.log(typeof totalAmountValueToNumber)
  // Calculate total liquid amount

  const totalLiquidAmount = fluidInputValueToNumber + totalAmountValueToNumber
  console.log(totalLiquidAmount)

  // Show liquid amount on UI

  totalAmountValue.textContent = totalLiquidAmount

  //Popup message to inform user if the reached their target

  if (totalLiquidAmount >= 1500) {
    alert("Congradulations! You have reached your daily target")
  } else {
    alert("Continue drinking. Your are on the right track")
  }
}
fluidsButton.addEventListener("click", addFluids);