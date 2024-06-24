/**
 *Initial function for the calculator
 which wil calculate the BMI
 */
function calculateBMI() {
  let heightInput = document.getElementById("height");
  let weightInput = document.getElementById("weight");
  let resultDiv = document.getElementById("result");

  var height = parseFloat(heightInput.value);
  var weight = parseFloat(weightInput.value);

  if (weight <= 1 && weight === 500) {
    return ["Please enter your weight."];
  }

  if (height <= 1 && height === 350) {
    return ["Please enter your height."];
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

  resultDiv.innerHTML = "This is your BMI: " + bmi.toFixed(2) + " (" + classification + ")";
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
 * and return the totla amount inputed 
 */
const inp1 = document.getElementById("fluids");
const tot1 = document.getElementById("total-amount");
const btn1 = document.getElementById("add-fluids-btn");

function addFluids() {
  tot1.innerHTML = (inp1 + btn1).value;

  if (tot1 >= 1500){
    return["Congradulations! You have reached your daily target"]
  } else {
    return ["Continue drinking. Your are on the right track"]
  }
}
btn1.addEventListener("click", addFluids );

