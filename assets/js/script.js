/**
 *Initial function for the calculator
 which wil calculate the BMI
 */

let heightInp = document.getElementById("height");
let weightInp = document.getElementById("weight");
let res1 = document.getElementById("result");

function calculateBMI() {
  var height = parseFloat(heightInp.value);
  var weight = parseFloat(weightInp.value);

  if (weight <= 1 && weight === 500) {
    return ["Please enter your weight."];
  }

  if (height <= 1 && height === 350) {
    return ["Please enter your height."];
  }

  if (height === NaN || weight === NaN) {
    return ["You must add your weight and height to calculate your BMI"]
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
  } else {
    alert("Enter valid weight and height")
  }

  res1.innerHTML = "This is your BMI: " + bmi.toFixed(2) + " (" + classification + ")";

}

let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup").innerHTML;
}

function closePopup() {
  popup.classList.remove("open-popup").innerHTML;
}

/**
 * Function to add the amount of fluids drank 
 * and return the total amount inputed 
 */
const fluidInputValue = document.getElementById("fluids");
const totalAmountValue = document.getElementById("total-amount");
const btn1 = document.getElementById("add-fluids-btn");

function addFluids() {
  
  console.log(typeof fluidInputValue.value)
  console.log(typeof totalAmountValue.textContent)
  console.log(btn1)

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

  if (totalAmountValue >= 1500) {
    alert("Congradulations! You have reached your daily target")
  } else {
    return ["Continue drinking. Your are on the right track"]
  }
}
btn1.addEventListener("click", addFluids);