/**
 *Initial function for the calculator
 which wil calculate the BMI
 */
function calculateBMI() {
  let heightInput = document.getElementById("height");
  let weightInput = document.getElementById("weight");
  let result = document.getElementById("result");

  var height = parseFloat(heightInput.value);
  var weight = parseFloat(weightInput.value);

  if (weight <= "1" && weight === "500") {
    alert("Please enter your weight.");
    return;
  }

  if (height <= 1 && height === 350) {
    alert("Please enter your height.");
    return;
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

  result.innerHTML = "This is your BMI " + bmi.toFixed(2) + " (" + classification + ")";
}

let popup = document.getElementById("popup");

  function openPopup(){
    popup.classList.add("open-popup").innerHTML;
  }

  function closePopup(){
    popup.classList.remove("open-popup").innerHTML;
  }

/**
 * Function to add the amount of fluids drank 
 * and return the totla amount inputed 
 */
 document.addEventListener("DOMContent-Loaded", function(event) =>
  { let totalFluids = 0; 
  function addFluids() { 
    let fluidsInput = document.getElementById('fluids').value; 
    let fluidsAmount = parseInt(fluidsInput); 

    if (!isNaN(fluidsAmount) && fluidsAmount > 0) { 
      totalFluids += fluidsAmount; 
      document.getElementById('total-amount').textContent = totalFluids; 
      document.getElementById('fluids').value = ''; 
    } else { alert('Please enter a valid number');    
    } 
    }
    let addFluidsBtn = document.getElementById("add-fluids-btn");
    addFluidsBtn.addEventListener("onclick", addFluids);
  });
