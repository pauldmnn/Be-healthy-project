/**
 *Initial function for the calculator
 which wil calculate the BMI
 */
let heightInp = document.getElementById("height");
let weightInp = document.getElementById("weight");
let bmiResult = document.getElementById("result");

function calculateBMI() {

  let height = parseFloat(heightInp.value);
  let weight = parseFloat(weightInp.value);

  let bmi = weight / ((height / 100) ** 2);
  let classification = "";

  /**
   * Tell the result to the user and
   * tell the user in their BMI
   */
  if (bmi > 1 && bmi <= 16) {
    classification = "Severly underweight";
  } else if (bmi > 16 && bmi <= 18.5) {
    classification = "Underweight";
  } else if (bmi > 18.5 && bmi <= 24) {
    classification = "Optimal weight";
  } else if (bmi > 24 && bmi <= 29) {
    classification = "Overweight";
  } else if (bmi > 29 && bmi <= 39) {
    classification = "Obese";
  } else if (bmi > 39 && bmi <= 100) {
    classification = "Severly obese";
  }

  bmiResult.innerHTML = "Your BMI is: " + bmi.toFixed(2) +
    " (This means that you are: " + classification + ")";
}

// Get the element by its ID 
const blinkBtn =
  document.getElementById("blinkBtn");

// An array of colors to be used for blinking 
const colors = ['#00FF00', 'orange', '#FF01F7'];

// Variable to keep track of the 
// current color index 
let currentColorIndex = 0;

// Function to toggle the background 
// color of the button 
function blinkBackground() {
  blinkBtn.style.backgroundColor =
    colors[currentColorIndex];
  currentColorIndex =
    (currentColorIndex + 1) % colors.length;
}

//Code inspration from https://www.geeksforgeeks.org/
/** 
 * Start the blinking by setting an interval   
 * that calls the blinkBackground   
 * function every 500ms (0.5 second) 
 */
const blinkingInterval =
  setInterval(blinkBackground, 500);

/**
 * To stop blinking after 10 seconds,  
 * use setTimeout to clear the interval
 */
setTimeout(() => {
  clearInterval(blinkingInterval);
}, 10000);

/** 
 * Creates the popup with the result when 
 * "Check you BMI button" in clicked
 */
let popup = document.getElementById("popup");

function openPopup() {
  if (weightInp.value <= 0 || heightInp.value <= 0) {
    alert("Please enter valid height and weight.");
  } else {
    popup.classList.add("open-popup");
  }
}

/**
 * Closes the popup window when
 * the "OK" button is clicked
 */
function closePopup() {
  popup.classList.remove("open-popup");
}

// Code inspiration from google charts site
var google = window.google;

// Load the visualisation API and the correct package
google.charts.load("current", {
  packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

//Create the data table
function drawChart() {
  let data = google.visualization.arrayToDataTable([
    ['Type of food', 'Amount'],
    ['Potatoes, bread, rice, pasta and other starchy carbohydrate foods', 38],
    ['Fruit and vegetables', 40],
    ['Dairy and alternatives', 8],
    ['Beans, pulses, fish, eggs, meat and other protein', 12],
    ['Oils and spreads', 2]
  ]);

  // Set chart options
  const options = {
    title: 'Eat well guide',
    width: "auto",
    height: "500px",
    is3D: true,
  };

  const chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}

/**
 * Function to add the amount of fluids drank 
 * and return the total amount inputed 
 */
const fluidInputValue = document.getElementById("fluids");
const totalAmountValue = document.getElementById("total-amount");
const fluidsButton = document.getElementById("add-fluids-btn");

function addFluids() {

  //Convert values to number type
  const fluidInputValueToNumber = Number(fluidInputValue.value);
  const totalAmountValueToNumber = Number(totalAmountValue.textContent);

  // Calculate total liquid amount
  const totalLiquidAmount = fluidInputValueToNumber + totalAmountValueToNumber;

  // Show liquid amount on UI
  totalAmountValue.textContent = totalLiquidAmount;

  //Popup message to inform user if the reached their target
  if (fluidInputValue.value <= 0) {
    alert("Please enter the amount of fluids you drank.");
  } else if (totalLiquidAmount >= 1500) {
    alert("Congradulations! You have reached your daily target");
  } else {
    alert("Continue drinking. Your are on the right track");
  }
}
fluidsButton.addEventListener("click", addFluids);