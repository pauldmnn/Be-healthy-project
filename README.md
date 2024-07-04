# Be healthy

[Link to a live site](https://pauldmnn.github.io/Be-healthy-project/)

![Responsive view of Be healthy website](assets/images/responsive-screen.png)

## Introduction

Welcome to my second project which is part of the Code Institute Full Stack Development Course. The purpose of this project is to build an interactive front-end website using HTML, CSS and JavaScript which will respond to the users actions and allowing the user to input data and see the result. 

In this project the user can check what their Body Mass Index is and they can track the amount of fluids they drank.

The user will be able to see what types of foods and amount whey should be eating for a healthy and well balanced diet.

The user will be able to input their weight and height and the site will calculate their BMI and will open a popup window in which the user will see their BMI category. 

There is a fluid input box which will allow the user to input the amount of fluids they drank and will store the result so the user can easily track the amount of fluids they drank. 

#### Thank you for using this calculator

## UX - User Experience Design

In the course I was taught about the User Experience Design and the importance of it. 
Below I have listed the 5 plains of UX: 

- The Strategy Plane
- The Scope Plane
- The Structure Plane
- The Skeleton Plane
- The Surface Plane

## The Strategy Plane

### Creator Goals

- I want webpage to be easy to navigate.
- I want webpage to be user-friendly and responsive. 
- I want users to be able to see what the site is about immediately.

### User Stories

- As a user, I want the purpose of a webpage to be clear so I can decide if the content is right for me.
- As a user, I want to be able to calculate my BIM by inputting mu weight and height.
- As a user, I want to be able to check what types of foods I need to eat for a healthy and well balanced diet
- As a user, I want to monitor my fluid intake so I know if I am hydrated.

## The Scope Plane

I thought of the features I wanted to implement before designing the project, and a few of them were not achievable within my deadline. I decided to implement the ones covering my user stories first and add the remaining features later.

**Features implemented upon webpage release**

- The site to have an explanation to why is it important to have a normal body weight.
- The pie chart to be interactive and information to be displayed when the user hovers over the pie chart
- Added a fluid calculator so the user can input the amount of fluids they drank and show them the total amount they have drank. 
- The BMI calculator button automatically change colors which will make the user drawn to click the button.
- The result for the BMI to be in a popup window.

## The Scope Plane

### Colors

red:
- Header text

![rgb(255, 0, 0)](assets/images/red.png)

Hex - fafafa:
- BMI container background 
- Fluids container background
- Fluids text button

![#fafafa Hex Color](assets/images/white.png)

Lightblue:
- BMI calculator heading and paragraph background 
- Eat well guide heading and paragraph background
- Monitor your fluid intake background

![rgb(140, 243, 243))](assets/images/light-blue.png)

Yellow:
- Eat well guide background

![rgb(255, 255, 0)](assets/images/yellow.png)

Grey:
- Popup background

![rgb(232, 231, 231)](assets/images/grey.png)

Blue:
- Button background

![rgb(0, 0, 255)](assets/images/blue.png)

### Fonts

Both fonts used in this project are Google Fonts.

#### Oxygen :
I used Oxygen as the main font, as it's one of the most popular and user-friendly fonts. The Oxygen font is easy to read even on the smallest devices and provides a positive user experience.

#### Open Sans:
Open Sans font has been used for the headings. Using a different font for these features helped me highlight important sections and made the website easier and quicker to navigate.

## The Skeleton Plane

I made some changes to my project. Some features have become unnecessary or have caused poor user experience, so I decided to make them user friendly.

- The information about BMI and hydration was hard to be distinguished so I added a different color background so the user can read easier the information

- The text color for the BMI button was hard to read because of the color blinking so I changed the text color 

- The website requires a refresh after the screen was resized to allow the pie chart to resize as per the screen size. 

## The Surface Plane

### Features present across the project 

### Calculate BMI section:

- The calculator is responsive for all devices
- The input box is only for numbers

**Desktop** : 

![Desktop calculator](testing/desktop.png)

**Tablet**

![Tablet calculator](testing/tablet.png)

**Mobile** :

![Phone calculator](testing/phone.png)

### BMI Calculator

![BMI Calculator](testing/bmi-calculator.png)

    - Tells the user about importance of having a normal body weight and the user can calculate their own BMI.

### Eat well guide

![Eat ell guide](testing/pie-chart.png)
    - Tells the user about what they need to eat for a healthy and balanced diet. The pie chart is interactive and will tell the user the percentage of different types of foods they need to have eat.

### Fluids

![Fluid intake monitoring](testing/monitor-fluid-intake.png)

- Tells the user about the importance of keeping hydrated and then the user can input the amount of fluids they drank and every time they add more fluids the total will be added.

## Testing

### Manual testing

- Full page:
    - The page is fully responsive on large/medium/small resolutions.
    - The website requires a refresh after the screen was resized to allow the pie chart to resize as per the screen size. 

- BMI calculator
    - Calculator is fully responsive an different screen resolutions
    - Can only add number to the input field
    - Blink colors are operational and work for 10 seconds and instructed in JS
    - Popup window opens when the Check BMI button is clicked

- Fluids monitoring
    - Hover button changes color when mouse hovers
    - Input field only accepts numbers
    - Result is added correctly underneath the button
    - Alert window opens and correct message is displayed.  

#### Devices used during testing:

- HP laptop
- iPhone 14 Pro Max
- iPhone 13 Pro

### Chrome Dev Tools

Chrome dev tools were used throughout the development of the project to test responsiveness. 
Responsiveness was tested using Dev Tools to emulate the following devices :

- iPhone SE
- iPhone XR
- iPhone 12 Pro
- iPhone 14 Pro Max
- Pixel 7
- Samsung Galaxy S8+
- Samsung Galaxy S20 Ultra
- iPad Mini
- iPad Air
- iPad Pro
- Surface Pro 7
- Surface Duo
- Galaxy Fold
- Samsung Galaxy A51/71
- Nest Hub
- Nest Hub Max

### Browser Testing

During development, webpage was mainly tested on Google Chrome. 
However, during testing process below browsers have been used:

- Google Chrome
- Microsoft Edge
- Safari

### Validation

- I checked the validation for each individual HTML file by direct input into the validator.

[HTML validator](https://validator.w3.org/)

- 0 errors
- 0 warnings

![HTML validator results](testing/html-validator.png)

- I checked the CSS file by direct input into the validator.
[CSS validator](https://jigsaw.w3.org/css-validator/)

- 0 errors
- 0 warnings
- 0 info messages

![CSS validator results](testing/css-validator.png)

- I checked the JavaScript code using JSHint. 
[JavaScript validator](https://jshint.com/)

- The first time when I checked my code I had the following errors:

- 21 warnings
- 4 undefined variables
- 3 unused variables

![JavaScript validator results first time](testing/js-validator-before.png)

- I have rectified the errors, and this is the result:

- 1 warning
- 0 undefined variables
- 3 unused variables 

- The warning remaining is: Exponentiation operator' is only available in ES7 (use 'esversion: 7'). I used and exponential operator which is for esversion:7 but the JSHint validator can only validate for esversion:6.

- The three unused variables are remaining because one is called from the DOM and the other two are adding and removing the Popup window when button is clicked. 
- calculateBMI
- openPopup
- closePopup

![JavaScript validator after fixing errors](testing/js-validator-after.png)

### Bugs and Fixes

- The website requires a refresh after the screen is resized to allow the pie chart to resize as per the screen size. 
- Popup window opened despite no data being introduced in the input box. This was resolved by adding a function which stops the popup window to open unless the correct value was introduced into the input box

## Deployment 

The main branch of this repository is the most current version and has been used for the deployed version of the site.
The Code Institute student template was used to create this project.

[Code Institute Template](https://github.com/Code-Institute-Org/ci-full-template)

1. Click **Use This Template** button.
2. Give your repository a name, and description.
3. Open [Github](https://github.com/) and log into your account.
4. Click **New Workspace** button.
5. Create a workspace from your project repository by creating a clone.

### Creating a clone

1. From the repository, click **Code**.
2. In the **Clone >> HTTPS** section, copy the clone URL for the repository.
3. Paste a link into the designated area on the github. 

### Forking

1. From the repository, click **Fork**.
2. Give your repository a name.
3. Click **Create fork**.

## Credits

### Images :

- Project image for the header was taken from Google and converted by me

### Code :

- [Code Institute, Love math project](https://github.com/Code-Institute-Solutions/Love-Math-Solutions) :
    - Inspiration for the JavaScript code.

- [Google Charts](https://developers.google.com/chart)
    - Inspiration for the Pie Chart

- [Geeks for geeks](https://www.geeksforgeeks.org/):
    - Inspiration for the blinking button and BMI calculator JavaScript code

- [Font Awesome](https://fontawesome.com/) :
    - Used for all icons across the website.

## Thank you to everyone who read this documentation! 


