/**
 *Initial function for the calculator
 which wil calculate the BMI
 */
function calculateBMI() {
  var heightInput = document.getElementById("height");
  var weightInput = document.getElementById("weight");
  var resultDiv = document.getElementById("result");

  var height = parseFloat(heightInput.value);
  var weight = parseFloat(weightInput.value);

  if (weight = 0) {
    resultDiv.innerHTML = "Please enter your weight.";
    return;
  }

  if (height = 0) {
    resultDiv.innerHTML = "Please enter valid weight.";
    return;
  }

  var bmi = weight / ((height / 100) ** 2);
  var category = "";

/**
 * Tell the result to the user and
 * tell the user in their BMI
 */
  if (bmi <= 16) {
    category = "Severly underweight"
  } else if (bmi > 16 && bmi <= 18.5) {
    category = "Underweight"
  } else if (bmi > 18.5 && bmi <= 24) {
    category = "Optimal weight"
  } else if (bmi > 24 && bmi <= 29) {
    category = "Overweight"
  } else if (bmi > 29 && bmi <= 39) {
    category = "Obese"
  } else if (bmi > 39) {
    category = "Severly obese"
  }

  resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
}

let popup = document.getElementById("popup");

  function openPopup(){
    popup.classList.add("open-popup").innerHTML;
  }

  function closePopup(){
    popup.classList.remove("open-popup").innerHTML;
  }


