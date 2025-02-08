// Import the arrays from the files
import {
  canadaFallClothList,
  canadaSpringClothList,
  canadaSummerClothList,
  canadaWinterClothList,
} from "../js/canada-cloth.js";
import {
  canadaFallFoodList,
  canadaSpringFoodList,
  canadaSummerFoodList,
  canadaWinterFoodList,
} from "../js/canada-food.js";

import {
  franceFallClothList,
  franceSpringClothList,
  franceSummerClothList,
  franceWinterClothList,
} from "../js/france-cloth.js";
import {
  franceFallFoodList,
  franceSpringFoodList,
  franceSummerFoodList,
  franceWinterFoodList,
} from "../js/france-food.js";

import {
  germanyFallClothList,
  germanySpringClothList,
  germanySummerClothList,
  germanyWinterClothList,
} from "../js/germany-cloth.js";
import {
  germanyFallFoodList,
  germanySpringFoodList,
  germanySummerFoodList,
  germanyWinterFoodList,
} from "../js/germany-food.js";

import {
  usaFallClothList,
  usaSpringClothList,
  usaSummerClothList,
  usaWinterClothList,
} from "../js/usa-cloth.js";
import {
  usaFallFoodList,
  usaSpringFoodList,
  usaSummerFoodList,
  usaWinterFoodList,
} from "../js/usa-food.js";

// Initialize the lists
var countryList = ["Canada", "France", "Germany", "USA"];
var seasonList = ["Fall", "Spring", "Summer", "Winter"];
var userCart = [];
var checkSelectedProduct = [];
var countryError = document.getElementById("country-error");
var seasonError = document.getElementById("season-error");

// Get the element from DOM
var countryDropdown = document.getElementById("country");
var seasonDropdown = document.getElementById("season");
var goButton = document.getElementById("go-button");
var getItemButton = document.getElementById("get-item-button");

// Canada Cloth List
// Canada Fall cloth
var canadaFallCloth1 = document.getElementById("canada-fall-cloth-1");
var canadaFallCloth2 = document.getElementById("canada-fall-cloth-2");
var canadaFallCloth3 = document.getElementById("canada-fall-cloth-3");
var canadaFallCloth4 = document.getElementById("canada-fall-cloth-4");
var canadaFallCloth5 = document.getElementById("canada-fall-cloth-5");
// Canada Spring cloth
var canadaSpringCloth1 = document.getElementById("canada-spring-cloth-1");
var canadaSpringCloth2 = document.getElementById("canada-spring-cloth-2");
var canadaSpringCloth3 = document.getElementById("canada-spring-cloth-3");
var canadaSpringCloth4 = document.getElementById("canada-spring-cloth-4");
var canadaSpringCloth5 = document.getElementById("canada-spring-cloth-5");
// Canada Summer cloth
var canadaSummerCloth1 = document.getElementById("canada-summer-cloth-1");
var canadaSummerCloth2 = document.getElementById("canada-summer-cloth-2");
var canadaSummerCloth3 = document.getElementById("canada-summer-cloth-3");
var canadaSummerCloth4 = document.getElementById("canada-summer-cloth-4");
var canadaSummerCloth5 = document.getElementById("canada-summer-cloth-5");
// Canada Winter cloth
var canadaWinterCloth1 = document.getElementById("canada-winter-cloth-1");
var canadaWinterCloth2 = document.getElementById("canada-winter-cloth-2");
var canadaWinterCloth3 = document.getElementById("canada-winter-cloth-3");
var canadaWinterCloth4 = document.getElementById("canada-winter-cloth-4");
var canadaWinterCloth5 = document.getElementById("canada-winter-cloth-5");

// Canada Food List
// Canada Fall food
var canadaFallFood1 = document.getElementById("canada-fall-food-1");
var canadaFallFood2 = document.getElementById("canada-fall-food-2");
var canadaFallFood3 = document.getElementById("canada-fall-food-3");
var canadaFallFood4 = document.getElementById("canada-fall-food-4");
var canadaFallFood5 = document.getElementById("canada-fall-food-5");
// Canada Spring food
var canadaSpringFood1 = document.getElementById("canada-spring-food-1");
var canadaSpringFood2 = document.getElementById("canada-spring-food-2");
var canadaSpringFood3 = document.getElementById("canada-spring-food-3");
var canadaSpringFood4 = document.getElementById("canada-spring-food-4");
var canadaSpringFood5 = document.getElementById("canada-spring-food-5");
// Canada Summer food
var canadaSummerFood1 = document.getElementById("canada-summer-food-1");
var canadaSummerFood2 = document.getElementById("canada-summer-food-2");
var canadaSummerFood3 = document.getElementById("canada-summer-food-3");
var canadaSummerFood4 = document.getElementById("canada-summer-food-4");
var canadaSummerFood5 = document.getElementById("canada-summer-food-5");
// Canada Winter food
var canadaWinterFood1 = document.getElementById("canada-winter-food-1");
var canadaWinterFood2 = document.getElementById("canada-winter-food-2");
var canadaWinterFood3 = document.getElementById("canada-winter-food-3");
var canadaWinterFood4 = document.getElementById("canada-winter-food-4");
var canadaWinterFood5 = document.getElementById("canada-winter-food-5");

// France Cloth List
// France Fall cloth
var franceFallCloth1 = document.getElementById("france-fall-cloth-1");
var franceFallCloth2 = document.getElementById("france-fall-cloth-2");
var franceFallCloth3 = document.getElementById("france-fall-cloth-3");
var franceFallCloth4 = document.getElementById("france-fall-cloth-4");
var franceFallCloth5 = document.getElementById("france-fall-cloth-5");
// France Spring cloth
var franceSpringCloth1 = document.getElementById("france-spring-cloth-1");
var franceSpringCloth2 = document.getElementById("france-spring-cloth-2");
var franceSpringCloth3 = document.getElementById("france-spring-cloth-3");
var franceSpringCloth4 = document.getElementById("france-spring-cloth-4");
var franceSpringCloth5 = document.getElementById("france-spring-cloth-5");
// France Summer cloth
var franceSummerCloth1 = document.getElementById("france-summer-cloth-1");
var franceSummerCloth2 = document.getElementById("france-summer-cloth-2");
var franceSummerCloth3 = document.getElementById("france-summer-cloth-3");
var franceSummerCloth4 = document.getElementById("france-summer-cloth-4");
var franceSummerCloth5 = document.getElementById("france-summer-cloth-5");
// France Winter cloth
var franceWinterCloth1 = document.getElementById("france-winter-cloth-1");
var franceWinterCloth2 = document.getElementById("france-winter-cloth-2");
var franceWinterCloth3 = document.getElementById("france-winter-cloth-3");
var franceWinterCloth4 = document.getElementById("france-winter-cloth-4");
var franceWinterCloth5 = document.getElementById("france-winter-cloth-5");

// France Food List
// France food
var franceFallFood1 = document.getElementById("france-fall-food-1");
var franceFallFood2 = document.getElementById("france-fall-food-2");
var franceFallFood3 = document.getElementById("france-fall-food-3");
var franceFallFood4 = document.getElementById("france-fall-food-4");
var franceFallFood5 = document.getElementById("france-fall-food-5");
// France Spring food
var franceSpringFood1 = document.getElementById("france-spring-food-1");
var franceSpringFood2 = document.getElementById("france-spring-food-2");
var franceSpringFood3 = document.getElementById("france-spring-food-3");
var franceSpringFood4 = document.getElementById("france-spring-food-4");
var franceSpringFood5 = document.getElementById("france-spring-food-5");
// France Summer food
var franceSummerFood1 = document.getElementById("france-summer-food-1");
var franceSummerFood2 = document.getElementById("france-summer-food-2");
var franceSummerFood3 = document.getElementById("france-summer-food-3");
var franceSummerFood4 = document.getElementById("france-summer-food-4");
var franceSummerFood5 = document.getElementById("france-summer-food-5");
// France Winter food
var franceWinterFood1 = document.getElementById("france-winter-food-1");
var franceWinterFood2 = document.getElementById("france-winter-food-2");
var franceWinterFood3 = document.getElementById("france-winter-food-3");
var franceWinterFood4 = document.getElementById("france-winter-food-4");
var franceWinterFood5 = document.getElementById("france-winter-food-5");

// Germany Cloth
// Germany Fall cloth
var germanyFallCloth1 = document.getElementById("germany-fall-cloth-1");
var germanyFallCloth2 = document.getElementById("germany-fall-cloth-2");
var germanyFallCloth3 = document.getElementById("germany-fall-cloth-3");
var germanyFallCloth4 = document.getElementById("germany-fall-cloth-4");
var germanyFallCloth5 = document.getElementById("germany-fall-cloth-5");
// Germany Spring cloth
var germanySpringCloth1 = document.getElementById("germany-spring-cloth-1");
var germanySpringCloth2 = document.getElementById("germany-spring-cloth-2");
var germanySpringCloth3 = document.getElementById("germany-spring-cloth-3");
var germanySpringCloth4 = document.getElementById("germany-spring-cloth-4");
var germanySpringCloth5 = document.getElementById("germany-spring-cloth-5");
// Germany Summer cloth
var germanySummerCloth1 = document.getElementById("germany-summer-cloth-1");
var germanySummerCloth2 = document.getElementById("germany-summer-cloth-2");
var germanySummerCloth3 = document.getElementById("germany-summer-cloth-3");
var germanySummerCloth4 = document.getElementById("germany-summer-cloth-4");
var germanySummerCloth5 = document.getElementById("germany-summer-cloth-5");
// Germany Winter cloth
var germanyWinterCloth1 = document.getElementById("germany-winter-cloth-1");
var germanyWinterCloth2 = document.getElementById("germany-winter-cloth-2");
var germanyWinterCloth3 = document.getElementById("germany-winter-cloth-3");
var germanyWinterCloth4 = document.getElementById("germany-winter-cloth-4");
var germanyWinterCloth5 = document.getElementById("germany-winter-cloth-5");

// Germany Food List
// Germany Fall food
var germanyFallFood1 = document.getElementById("germany-fall-food-1");
var germanyFallFood2 = document.getElementById("germany-fall-food-2");
var germanyFallFood3 = document.getElementById("germany-fall-food-3");
var germanyFallFood4 = document.getElementById("germany-fall-food-4");
var germanyFallFood5 = document.getElementById("germany-fall-food-5");
// Germany Spring food
var germanySpringFood1 = document.getElementById("germany-spring-food-1");
var germanySpringFood2 = document.getElementById("germany-spring-food-2");
var germanySpringFood3 = document.getElementById("germany-spring-food-3");
var germanySpringFood4 = document.getElementById("germany-spring-food-4");
var germanySpringFood5 = document.getElementById("germany-spring-food-5");
// Germany Summer food
var germanySummerFood1 = document.getElementById("germany-summer-food-1");
var germanySummerFood2 = document.getElementById("germany-summer-food-2");
var germanySummerFood3 = document.getElementById("germany-summer-food-3");
var germanySummerFood4 = document.getElementById("germany-summer-food-4");
var germanySummerFood5 = document.getElementById("germany-summer-food-5");
// Germany Winter food
var germanyWinterFood1 = document.getElementById("germany-winter-food-1");
var germanyWinterFood2 = document.getElementById("germany-winter-food-2");
var germanyWinterFood3 = document.getElementById("germany-winter-food-3");
var germanyWinterFood4 = document.getElementById("germany-winter-food-4");
var germanyWinterFood5 = document.getElementById("germany-winter-food-5");

// USA Cloth List
// USA Fall cloth
var usaFallCloth1 = document.getElementById("usa-fall-cloth-1");
var usaFallCloth2 = document.getElementById("usa-fall-cloth-2");
var usaFallCloth3 = document.getElementById("usa-fall-cloth-3");
var usaFallCloth4 = document.getElementById("usa-fall-cloth-4");
var usaFallCloth5 = document.getElementById("usa-fall-cloth-5");
// USA Spring cloth
var usaSpringCloth1 = document.getElementById("usa-spring-cloth-1");
var usaSpringCloth2 = document.getElementById("usa-spring-cloth-2");
var usaSpringCloth3 = document.getElementById("usa-spring-cloth-3");
var usaSpringCloth4 = document.getElementById("usa-spring-cloth-4");
var usaSpringCloth5 = document.getElementById("usa-spring-cloth-5");
// USA Summer cloth
var usaSummerCloth1 = document.getElementById("usa-summer-cloth-1");
var usaSummerCloth2 = document.getElementById("usa-summer-cloth-2");
var usaSummerCloth3 = document.getElementById("usa-summer-cloth-3");
var usaSummerCloth4 = document.getElementById("usa-summer-cloth-4");
var usaSummerCloth5 = document.getElementById("usa-summer-cloth-5");
// USA Winter cloth
var usaWinterCloth1 = document.getElementById("usa-winter-cloth-1");
var usaWinterCloth2 = document.getElementById("usa-winter-cloth-2");
var usaWinterCloth3 = document.getElementById("usa-winter-cloth-3");
var usaWinterCloth4 = document.getElementById("usa-winter-cloth-4");
var usaWinterCloth5 = document.getElementById("usa-winter-cloth-5");

// USA Food List
// USA Fall food
var usaFallFood1 = document.getElementById("usa-fall-food-1");
var usaFallFood2 = document.getElementById("usa-fall-food-2");
var usaFallFood3 = document.getElementById("usa-fall-food-3");
var usaFallFood4 = document.getElementById("usa-fall-food-4");
var usaFallFood5 = document.getElementById("usa-fall-food-5");
// France Spring food
var usaSpringFood1 = document.getElementById("usa-spring-food-1");
var usaSpringFood2 = document.getElementById("usa-spring-food-2");
var usaSpringFood3 = document.getElementById("usa-spring-food-3");
var usaSpringFood4 = document.getElementById("usa-spring-food-4");
var usaSpringFood5 = document.getElementById("usa-spring-food-5");
// France Summer food
var usaSummerFood1 = document.getElementById("usa-summer-food-1");
var usaSummerFood2 = document.getElementById("usa-summer-food-2");
var usaSummerFood3 = document.getElementById("usa-summer-food-3");
var usaSummerFood4 = document.getElementById("usa-summer-food-4");
var usaSummerFood5 = document.getElementById("usa-summer-food-5");
// France Winter food
var usaWinterFood1 = document.getElementById("usa-winter-food-1");
var usaWinterFood2 = document.getElementById("usa-winter-food-2");
var usaWinterFood3 = document.getElementById("usa-winter-food-3");
var usaWinterFood4 = document.getElementById("usa-winter-food-4");
var usaWinterFood5 = document.getElementById("usa-winter-food-5");

// Listen onclick event on "Go" button
goButton.onclick = getValues;

// Get country content from DOM
var canadaContent = document.getElementById("canada-content");
var franceContent = document.getElementById("france-content");
var germanyContent = document.getElementById("germany-content");
var usaContent = document.getElementById("USA-content");

// Canada Season Wear
var canadaFallSeasonWear = document.getElementById("canada-fall-season-wear");
var canadaSpringSeasonWear = document.getElementById(
  "canada-spring-season-wear"
);
var canadaSummerSeasonWear = document.getElementById(
  "canada-summer-season-wear"
);
var canadaWinterSeasonWear = document.getElementById(
  "canada-winter-season-wear"
);

// France Season Wear
var franceFallSeasonWear = document.getElementById("france-fall-season-wear");
var franceSpringSeasonWear = document.getElementById(
  "france-spring-season-wear"
);
var franceSummerSeasonWear = document.getElementById(
  "france-summer-season-wear"
);
var franceWinterSeasonWear = document.getElementById(
  "france-winter-season-wear"
);

// Germany Season Wear
var germanyFallSeasonWear = document.getElementById("germany-fall-season-wear");
var germanySpringSeasonWear = document.getElementById(
  "germany-spring-season-wear"
);
var germanySummerSeasonWear = document.getElementById(
  "germany-summer-season-wear"
);
var germanyWinterSeasonWear = document.getElementById(
  "germany-winter-season-wear"
);

// USA Season Wear
var usaFallSeasonWear = document.getElementById("usa-fall-season-wear");
var usaSpringSeasonWear = document.getElementById("usa-spring-season-wear");
var usaSummerSeasonWear = document.getElementById("usa-summer-season-wear");
var usaWinterSeasonWear = document.getElementById("usa-winter-season-wear");

// Canada Season Food
var canadaFallSeasonFood = document.getElementById(
  "canada-fall-season-food-list"
);
var canadaSpringSeasonFood = document.getElementById(
  "canada-spring-season-food-list"
);
var canadaSummerSeasonFood = document.getElementById(
  "canada-summer-season-food-list"
);
var canadaWinterSeasonFood = document.getElementById(
  "canada-winter-season-food-list"
);

// France Season Food
var franceFallSeasonFood = document.getElementById(
  "france-fall-season-food-list"
);
var franceSpringSeasonFood = document.getElementById(
  "france-spring-season-food-list"
);
var franceSummerSeasonFood = document.getElementById(
  "france-summer-season-food-list"
);
var franceWinterSeasonFood = document.getElementById(
  "france-winter-season-food-list"
);

// Germany Season Food
var germanyFallSeasonFood = document.getElementById(
  "germany-fall-season-food-list"
);
var germanySpringSeasonFood = document.getElementById(
  "germany-spring-season-food-list"
);
var germanySummerSeasonFood = document.getElementById(
  "germany-summer-season-food-list"
);
var germanyWinterSeasonFood = document.getElementById(
  "germany-winter-season-food-list"
);

// USA Season Food
var usaFallSeasonFood = document.getElementById("usa-fall-season-food-list");
var usaSpringSeasonFood = document.getElementById(
  "usa-spring-season-food-list"
);
var usaSummerSeasonFood = document.getElementById(
  "usa-summer-season-food-list"
);
var usaWinterSeasonFood = document.getElementById(
  "usa-winter-season-food-list"
);

// Iterate country to display the items dynamically
for (var country of countryList) {
  // Create the element
  let option = document.createElement("option");
  option.setAttribute("value", country);
  // Assign the value
  option.innerHTML = country;
  // Append the element
  countryDropdown.appendChild(option);
}

// Iterate season to display the items dynamically
for (var season of seasonList) {
  // Create the element
  let option = document.createElement("option");
  option.setAttribute("value", season);
  // Assign the value
  option.innerHTML = season;
  // Append the element
  seasonDropdown.appendChild(option);
}

// Store selected cloth items and apply styles dynamically
function selectedCloth(cloth, details) {
  // Get the selected cloth
  var clothChosen = document.getElementById(cloth);
  // Apply the style to the image
  clothChosen.querySelector("img").style.outline = "3px solid #2AF9B1";
  // Add it to the array
  userCart.push(details);
  // Call the function to display the items
  checkCart();
}

// Store selected food items and apply styles dynamically
function selectedFood(food, details) {
  // Get the selected food
  var foodChosen = document.getElementById(food);
  // Apply the style to the image
  foodChosen.querySelector("img").style.outline = "3px solid #2AF9B1";
  // Add it to the array
  userCart.push(details);
  // Call the function to display the items
  checkCart();
}

// Function to render info dynamically based on the selected country and season
function getValues() {
  if (
    countryDropdown.value === "country" &&
    seasonDropdown.value === "season"
  ) {
    // Clear the errors if occured previously
    countryError.innerHTML = "";
    seasonError.innerHTML = "";
    // Show the error if country & season is not selected
    countryError.innerHTML = "Country cannot be empty";
    seasonError.innerHTML = "Season cannot be empty";
  } else if (countryDropdown.value === "country") {
    // Clear the errors if occured previously
    countryError.innerHTML = "";
    seasonError.innerHTML = "";
    // Show the error if country is not selected
    countryError.innerHTML = "Country cannot be empty";
  } else if (seasonDropdown.value === "season") {
    // Clear the errors if occured previously
    countryError.innerHTML = "";
    seasonError.innerHTML = "";
    // Show the error if season is not selected
    //alert("Please choose the season");
    seasonError.innerHTML = "Season cannot be empty";
  } else {
    // Clear the errors if occured previously
    countryError.innerHTML = "";
    seasonError.innerHTML = "";
    // Country is Canada & Season is Fall
    if (countryDropdown.value === "Canada" && seasonDropdown.value === "Fall") {
      // Hide the other country's content
      franceContent.style.display = "none";
      germanyContent.style.display = "none";
      usaContent.style.display = "none";

      // Hide the other country's seasons & food
      usaFallSeasonWear.style.display = "none";
      usaFallSeasonFood.style.display = "none";
      usaSpringSeasonWear.style.display = "none";
      usaSpringSeasonFood.style.display = "none";
      usaSummerSeasonWear.style.display = "none";
      usaSummerSeasonFood.style.display = "none";
      usaWinterSeasonWear.style.display = "none";
      usaWinterSeasonFood.style.display = "none";
      germanyFallSeasonWear.style.display = "none";
      germanyFallSeasonFood.style.display = "none";
      germanySpringSeasonWear.style.display = "none";
      germanySpringSeasonFood.style.display = "none";
      germanySummerSeasonWear.style.display = "none";
      germanySummerSeasonFood.style.display = "none";
      germanyWinterSeasonWear.style.display = "none";
      germanyWinterSeasonFood.style.display = "none";
      franceFallSeasonWear.style.display = "none";
      franceFallSeasonFood.style.display = "none";
      franceSpringSeasonWear.style.display = "none";
      franceSpringSeasonFood.style.display = "none";
      franceSummerSeasonWear.style.display = "none";
      franceSummerSeasonFood.style.display = "none";
      franceWinterSeasonWear.style.display = "none";
      franceWinterSeasonFood.style.display = "none";
      canadaSpringSeasonWear.style.display = "none";
      canadaSpringSeasonFood.style.display = "none";
      canadaSummerSeasonWear.style.display = "none";
      canadaSummerSeasonFood.style.display = "none";
      canadaWinterSeasonWear.style.display = "none";
      canadaWinterSeasonFood.style.display = "none";

      // Show current country content
      canadaContent.style.display = "block";
      canadaFallSeasonWear.style.display = "block";
      canadaFallSeasonFood.style.display = "block";

      // Event listener for cloth
      canadaFallCloth1.addEventListener("click", () =>
        selectedCloth("canada-fall-cloth-1", canadaFallClothList[0])
      );
      canadaFallCloth2.addEventListener("click", () =>
        selectedCloth("canada-fall-cloth-2", canadaFallClothList[1])
      );
      canadaFallCloth3.addEventListener("click", () =>
        selectedCloth("canada-fall-cloth-3", canadaFallClothList[2])
      );
      canadaFallCloth4.addEventListener("click", () =>
        selectedCloth("canada-fall-cloth-4", canadaFallClothList[3])
      );
      canadaFallCloth5.addEventListener("click", () =>
        selectedCloth("canada-fall-cloth-5", canadaFallClothList[4])
      );
      // Event listener for food
      canadaFallFood1.addEventListener("click", () =>
        selectedFood("canada-fall-food-1", canadaFallFoodList[0])
      );
      canadaFallFood2.addEventListener("click", () =>
        selectedFood("canada-fall-food-2", canadaFallFoodList[1])
      );
      canadaFallFood3.addEventListener("click", () =>
        selectedFood("canada-fall-food-3", canadaFallFoodList[2])
      );
      canadaFallFood4.addEventListener("click", () =>
        selectedFood("canada-fall-food-4", canadaFallFoodList[3])
      );
      canadaFallFood5.addEventListener("click", () =>
        selectedFood("canada-fall-food-5", canadaFallFoodList[4])
      );
      // Check if the items are already displayed
      if (canadaFallCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of canadaFallClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById(
            "canada-fall-cloth-" + cloth.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          function showContent() {
            itemContent.innerHTML = cloth.description;
            content.appendChild(itemContent);
            element.appendChild(content);
            content.style.display = "block";
          }
          function hideContent() {
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of canadaFallFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById("canada-fall-food-" + food.id);
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }
    // Country is Canada & Season is Spring
    else if (
      countryDropdown.value === "Canada" &&
      seasonDropdown.value === "Spring"
    ) {
      // Hide the other country's content
      franceContent.style.display = "none";
      germanyContent.style.display = "none";
      usaContent.style.display = "none";

      // Hide the other country's seasons & food
      usaFallSeasonWear.style.display = "none";
      usaFallSeasonFood.style.display = "none";
      usaSpringSeasonWear.style.display = "none";
      usaSpringSeasonFood.style.display = "none";
      usaSummerSeasonWear.style.display = "none";
      usaSummerSeasonFood.style.display = "none";
      usaWinterSeasonWear.style.display = "none";
      usaWinterSeasonFood.style.display = "none";
      germanyFallSeasonWear.style.display = "none";
      germanyFallSeasonFood.style.display = "none";
      germanySpringSeasonWear.style.display = "none";
      germanySpringSeasonFood.style.display = "none";
      germanySummerSeasonWear.style.display = "none";
      germanySummerSeasonFood.style.display = "none";
      germanyWinterSeasonWear.style.display = "none";
      germanyWinterSeasonFood.style.display = "none";
      franceFallSeasonWear.style.display = "none";
      franceFallSeasonFood.style.display = "none";
      franceSpringSeasonWear.style.display = "none";
      franceSpringSeasonFood.style.display = "none";
      franceSummerSeasonWear.style.display = "none";
      franceSummerSeasonFood.style.display = "none";
      franceWinterSeasonWear.style.display = "none";
      franceWinterSeasonFood.style.display = "none";
      canadaFallSeasonWear.style.display = "none";
      canadaFallSeasonFood.style.display = "none";
      canadaSummerSeasonWear.style.display = "none";
      canadaSummerSeasonFood.style.display = "none";
      canadaWinterSeasonWear.style.display = "none";
      canadaWinterSeasonFood.style.display = "none";

      // Show current country's info
      canadaContent.style.display = "block";
      canadaSpringSeasonWear.style.display = "block";
      canadaSpringSeasonFood.style.display = "block";

      // Event listener for cloth
      canadaSpringCloth1.addEventListener("click", () =>
        selectedCloth("canada-spring-cloth-1", canadaSpringClothList[0])
      );
      canadaSpringCloth2.addEventListener("click", () =>
        selectedCloth("canada-spring-cloth-2", canadaSpringClothList[1])
      );
      canadaSpringCloth3.addEventListener("click", () =>
        selectedCloth("canada-spring-cloth-3", canadaSpringClothList[2])
      );
      canadaSpringCloth4.addEventListener("click", () =>
        selectedCloth("canada-spring-cloth-4", canadaSpringClothList[3])
      );
      canadaSpringCloth5.addEventListener("click", () =>
        selectedCloth("canada-spring-cloth-5", canadaSpringClothList[4])
      );
      // Event listener for food
      canadaSpringFood1.addEventListener("click", () =>
        selectedFood("canada-spring-food-1", canadaSpringFoodList[0])
      );
      canadaSpringFood2.addEventListener("click", () =>
        selectedFood("canada-spring-food-2", canadaSpringFoodList[1])
      );
      canadaSpringFood3.addEventListener("click", () =>
        selectedFood("canada-spring-food-3", canadaSpringFoodList[2])
      );
      canadaSpringFood4.addEventListener("click", () =>
        selectedFood("canada-spring-food-4", canadaSpringFoodList[3])
      );
      canadaSpringFood5.addEventListener("click", () =>
        selectedFood("canada-spring-food-5", canadaSpringFoodList[4])
      );
      // Check if the items are already displayed
      if (canadaSpringCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of canadaSpringClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById(
            "canada-spring-cloth-" + cloth.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = cloth.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of canadaSpringFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById(
            "canada-spring-food-" + food.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }
    // Country is Canada & Season is Summer
    else if (
      countryDropdown.value === "Canada" &&
      seasonDropdown.value === "Summer"
    ) {
      // Hide the other country's content
      franceContent.style.display = "none";
      germanyContent.style.display = "none";
      usaContent.style.display = "none";

      // Hide the other country's seasons & food
      usaFallSeasonWear.style.display = "none";
      usaFallSeasonFood.style.display = "none";
      usaSpringSeasonWear.style.display = "none";
      usaSpringSeasonFood.style.display = "none";
      usaSummerSeasonWear.style.display = "none";
      usaSummerSeasonFood.style.display = "none";
      usaWinterSeasonWear.style.display = "none";
      usaWinterSeasonFood.style.display = "none";
      germanyFallSeasonWear.style.display = "none";
      germanyFallSeasonFood.style.display = "none";
      germanySpringSeasonWear.style.display = "none";
      germanySpringSeasonFood.style.display = "none";
      germanySummerSeasonWear.style.display = "none";
      germanySummerSeasonFood.style.display = "none";
      germanyWinterSeasonWear.style.display = "none";
      germanyWinterSeasonFood.style.display = "none";
      franceFallSeasonWear.style.display = "none";
      franceFallSeasonFood.style.display = "none";
      franceSpringSeasonWear.style.display = "none";
      franceSpringSeasonFood.style.display = "none";
      franceSummerSeasonWear.style.display = "none";
      franceSummerSeasonFood.style.display = "none";
      franceWinterSeasonWear.style.display = "none";
      franceWinterSeasonFood.style.display = "none";
      canadaFallSeasonWear.style.display = "none";
      canadaFallSeasonFood.style.display = "none";
      canadaSpringSeasonWear.style.display = "none";
      canadaSpringSeasonFood.style.display = "none";
      canadaWinterSeasonWear.style.display = "none";
      canadaWinterSeasonFood.style.display = "none";

      // Show current country's info
      canadaContent.style.display = "block";
      canadaSummerSeasonWear.style.display = "block";
      canadaSummerSeasonFood.style.display = "block";

      // Event listener for cloth
      canadaSummerCloth1.addEventListener("click", () =>
        selectedCloth("canada-summer-cloth-1", canadaSummerClothList[0])
      );
      canadaSummerCloth2.addEventListener("click", () =>
        selectedCloth("canada-summer-cloth-2", canadaSummerClothList[1])
      );
      canadaSummerCloth3.addEventListener("click", () =>
        selectedCloth("canada-summer-cloth-3", canadaSummerClothList[2])
      );
      canadaSummerCloth4.addEventListener("click", () =>
        selectedCloth("canada-summer-cloth-4", canadaSummerClothList[3])
      );
      canadaSummerCloth5.addEventListener("click", () =>
        selectedCloth("canada-summer-cloth-5", canadaSummerClothList[4])
      );
      // Event listener for food
      canadaSummerFood1.addEventListener("click", () =>
        selectedFood("canada-summer-food-1", canadaSummerFoodList[0])
      );
      canadaSummerFood2.addEventListener("click", () =>
        selectedFood("canada-summer-food-2", canadaSummerFoodList[1])
      );
      canadaSummerFood3.addEventListener("click", () =>
        selectedFood("canada-summer-food-3", canadaSummerFoodList[2])
      );
      canadaSummerFood4.addEventListener("click", () =>
        selectedFood("canada-summer-food-4", canadaSummerFoodList[3])
      );
      canadaSummerFood5.addEventListener("click", () =>
        selectedFood("canada-summer-food-5", canadaSummerFoodList[4])
      );
      // Check if the items are already displayed
      if (canadaSummerCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of canadaSummerClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById(
            "canada-summer-cloth-" + cloth.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = cloth.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of canadaSummerFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById(
            "canada-summer-food-" + food.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }
    // Country is Canada & Season is Winter
    else if (
      countryDropdown.value === "Canada" &&
      seasonDropdown.value === "Winter"
    ) {
      // Hide the other country's content
      franceContent.style.display = "none";
      germanyContent.style.display = "none";
      usaContent.style.display = "none";

      // Hide the other country's seasons & food
      usaFallSeasonWear.style.display = "none";
      usaFallSeasonFood.style.display = "none";
      usaSpringSeasonWear.style.display = "none";
      usaSpringSeasonFood.style.display = "none";
      usaSummerSeasonWear.style.display = "none";
      usaSummerSeasonFood.style.display = "none";
      usaWinterSeasonWear.style.display = "none";
      usaWinterSeasonFood.style.display = "none";
      germanyFallSeasonWear.style.display = "none";
      germanyFallSeasonFood.style.display = "none";
      germanySpringSeasonWear.style.display = "none";
      germanySpringSeasonFood.style.display = "none";
      germanySummerSeasonWear.style.display = "none";
      germanySummerSeasonFood.style.display = "none";
      germanyWinterSeasonWear.style.display = "none";
      germanyWinterSeasonFood.style.display = "none";
      franceFallSeasonWear.style.display = "none";
      franceFallSeasonFood.style.display = "none";
      franceSpringSeasonWear.style.display = "none";
      franceSpringSeasonFood.style.display = "none";
      franceSummerSeasonWear.style.display = "none";
      franceSummerSeasonFood.style.display = "none";
      franceWinterSeasonWear.style.display = "none";
      franceWinterSeasonFood.style.display = "none";
      canadaFallSeasonWear.style.display = "none";
      canadaFallSeasonFood.style.display = "none";
      canadaSpringSeasonWear.style.display = "none";
      canadaSpringSeasonFood.style.display = "none";
      canadaSummerSeasonWear.style.display = "none";
      canadaSummerSeasonFood.style.display = "none";

      // Show current country's info
      canadaContent.style.display = "block";
      canadaWinterSeasonWear.style.display = "block";
      canadaWinterSeasonFood.style.display = "block";

      // Event listener for cloth
      canadaWinterCloth1.addEventListener("click", () =>
        selectedCloth("canada-winter-cloth-1", canadaWinterClothList[0])
      );
      canadaWinterCloth2.addEventListener("click", () =>
        selectedCloth("canada-winter-cloth-2", canadaWinterClothList[1])
      );
      canadaWinterCloth3.addEventListener("click", () =>
        selectedCloth("canada-winter-cloth-3", canadaWinterClothList[2])
      );
      canadaWinterCloth4.addEventListener("click", () =>
        selectedCloth("canada-winter-cloth-4", canadaWinterClothList[3])
      );
      canadaWinterCloth5.addEventListener("click", () =>
        selectedCloth("canada-winter-cloth-5", canadaWinterClothList[4])
      );
      // Event listener for food
      canadaWinterFood1.addEventListener("click", () =>
        selectedFood("canada-winter-food-1", canadaWinterFoodList[0])
      );
      canadaWinterFood2.addEventListener("click", () =>
        selectedFood("canada-winter-food-2", canadaWinterFoodList[1])
      );
      canadaWinterFood3.addEventListener("click", () =>
        selectedFood("canada-winter-food-3", canadaWinterFoodList[2])
      );
      canadaWinterFood4.addEventListener("click", () =>
        selectedFood("canada-winter-food-4", canadaWinterFoodList[3])
      );
      canadaWinterFood5.addEventListener("click", () =>
        selectedFood("canada-winter-food-5", canadaWinterFoodList[4])
      );
      // Check if the items are already displayed
      if (canadaWinterCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of canadaWinterClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById(
            "canada-winter-cloth-" + cloth.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = cloth.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of canadaWinterFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById(
            "canada-winter-food-" + food.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }

    // Country is France & Season is Fall
    else if (
      countryDropdown.value === "France" &&
      seasonDropdown.value === "Fall"
    ) {
      // Hide the other country's content
      canadaContent.style.display = "none";
      germanyContent.style.display = "none";
      usaContent.style.display = "none";

      // Hide the other country's seasons & food
      usaFallSeasonWear.style.display = "none";
      usaFallSeasonFood.style.display = "none";
      usaSpringSeasonWear.style.display = "none";
      usaSpringSeasonFood.style.display = "none";
      usaSummerSeasonWear.style.display = "none";
      usaSummerSeasonFood.style.display = "none";
      usaWinterSeasonWear.style.display = "none";
      usaWinterSeasonFood.style.display = "none";
      germanyFallSeasonWear.style.display = "none";
      germanyFallSeasonFood.style.display = "none";
      germanySpringSeasonWear.style.display = "none";
      germanySpringSeasonFood.style.display = "none";
      germanySummerSeasonWear.style.display = "none";
      germanySummerSeasonFood.style.display = "none";
      germanyWinterSeasonWear.style.display = "none";
      germanyWinterSeasonFood.style.display = "none";
      franceSpringSeasonWear.style.display = "none";
      franceSpringSeasonFood.style.display = "none";
      franceSummerSeasonWear.style.display = "none";
      franceSummerSeasonFood.style.display = "none";
      franceWinterSeasonWear.style.display = "none";
      franceWinterSeasonFood.style.display = "none";
      canadaFallSeasonWear.style.display = "none";
      canadaFallSeasonFood.style.display = "none";
      canadaSpringSeasonWear.style.display = "none";
      canadaSpringSeasonFood.style.display = "none";
      canadaSummerSeasonWear.style.display = "none";
      canadaSummerSeasonFood.style.display = "none";
      canadaWinterSeasonWear.style.display = "none";
      canadaWinterSeasonFood.style.display = "none";

      // Show current country's info
      franceContent.style.display = "block";
      franceFallSeasonWear.style.display = "block";
      franceFallSeasonFood.style.display = "block";

      // Event listener for cloth
      franceFallCloth1.addEventListener("click", () =>
        selectedCloth("france-fall-cloth-1", franceFallClothList[0])
      );
      franceFallCloth2.addEventListener("click", () =>
        selectedCloth("france-fall-cloth-2", franceFallClothList[1])
      );
      franceFallCloth3.addEventListener("click", () =>
        selectedCloth("france-fall-cloth-3", franceFallClothList[2])
      );
      franceFallCloth4.addEventListener("click", () =>
        selectedCloth("france-fall-cloth-4", franceFallClothList[3])
      );
      franceFallCloth5.addEventListener("click", () =>
        selectedCloth("france-fall-cloth-5", franceFallClothList[4])
      );
      // Event listener for food
      franceFallFood1.addEventListener("click", () =>
        selectedFood("france-fall-food-1", franceFallFoodList[0])
      );
      franceFallFood2.addEventListener("click", () =>
        selectedFood("france-fall-food-2", franceFallFoodList[1])
      );
      franceFallFood3.addEventListener("click", () =>
        selectedFood("france-fall-food-3", franceFallFoodList[2])
      );
      franceFallFood4.addEventListener("click", () =>
        selectedFood("france-fall-food-4", franceFallFoodList[3])
      );
      franceFallFood5.addEventListener("click", () =>
        selectedFood("france-fall-food-5", franceFallFoodList[4])
      );
      // Check if the items are already displayed
      if (franceFallCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of franceFallClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById(
            "france-fall-cloth-" + cloth.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = cloth.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of franceFallFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById("france-fall-food-" + food.id);
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }
    // Country is France & Season is Spring
    else if (
      countryDropdown.value === "France" &&
      seasonDropdown.value === "Spring"
    ) {
      // Hide the other country's content
      canadaContent.style.display = "none";
      germanyContent.style.display = "none";
      usaContent.style.display = "none";

      // Hide the other country's seasons & food
      usaFallSeasonWear.style.display = "none";
      usaFallSeasonFood.style.display = "none";
      usaSpringSeasonWear.style.display = "none";
      usaSpringSeasonFood.style.display = "none";
      usaSummerSeasonWear.style.display = "none";
      usaSummerSeasonFood.style.display = "none";
      usaWinterSeasonWear.style.display = "none";
      usaWinterSeasonFood.style.display = "none";
      germanyFallSeasonWear.style.display = "none";
      germanyFallSeasonFood.style.display = "none";
      germanySpringSeasonWear.style.display = "none";
      germanySpringSeasonFood.style.display = "none";
      germanySummerSeasonWear.style.display = "none";
      germanySummerSeasonFood.style.display = "none";
      germanyWinterSeasonWear.style.display = "none";
      germanyWinterSeasonFood.style.display = "none";
      franceFallSeasonWear.style.display = "none";
      franceFallSeasonFood.style.display = "none";
      franceSummerSeasonWear.style.display = "none";
      franceSummerSeasonFood.style.display = "none";
      franceWinterSeasonWear.style.display = "none";
      franceWinterSeasonFood.style.display = "none";
      canadaFallSeasonWear.style.display = "none";
      canadaFallSeasonFood.style.display = "none";
      canadaSpringSeasonWear.style.display = "none";
      canadaSpringSeasonFood.style.display = "none";
      canadaSummerSeasonWear.style.display = "none";
      canadaSummerSeasonFood.style.display = "none";
      canadaWinterSeasonWear.style.display = "none";
      canadaWinterSeasonFood.style.display = "none";

      // Show current country's info
      franceContent.style.display = "block";
      franceSpringSeasonWear.style.display = "block";
      franceSpringSeasonFood.style.display = "block";

      // Event listener for cloth
      franceSpringCloth1.addEventListener("click", () =>
        selectedCloth("france-spring-cloth-1", franceSpringClothList[0])
      );
      franceSpringCloth2.addEventListener("click", () =>
        selectedCloth("france-spring-cloth-2", franceSpringClothList[1])
      );
      franceSpringCloth3.addEventListener("click", () =>
        selectedCloth("france-spring-cloth-3", franceSpringClothList[2])
      );
      franceSpringCloth4.addEventListener("click", () =>
        selectedCloth("france-spring-cloth-4", franceSpringClothList[3])
      );
      franceSpringCloth5.addEventListener("click", () =>
        selectedCloth("france-spring-cloth-5", franceSpringClothList[4])
      );
      // Event listener for food
      franceSpringFood1.addEventListener("click", () =>
        selectedFood("france-spring-food-1", franceSpringFoodList[0])
      );
      franceSpringFood2.addEventListener("click", () =>
        selectedFood("france-spring-food-2", franceSpringFoodList[1])
      );
      franceSpringFood3.addEventListener("click", () =>
        selectedFood("france-spring-food-3", franceSpringFoodList[2])
      );
      franceSpringFood4.addEventListener("click", () =>
        selectedFood("france-spring-food-4", franceSpringFoodList[3])
      );
      franceSpringFood5.addEventListener("click", () =>
        selectedFood("france-spring-food-5", franceSpringFoodList[4])
      );
      // Check if the items are already displayed
      if (franceSpringCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of franceSpringClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById(
            "france-spring-cloth-" + cloth.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = cloth.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of franceSpringFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById(
            "france-spring-food-" + food.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }
    // Country is France & Season is Summer
    else if (
      countryDropdown.value === "France" &&
      seasonDropdown.value === "Summer"
    ) {
      // Hide the other country's content
      canadaContent.style.display = "none";
      germanyContent.style.display = "none";
      usaContent.style.display = "none";

      // Hide the other country's seasons & food
      usaFallSeasonWear.style.display = "none";
      usaFallSeasonFood.style.display = "none";
      usaSpringSeasonWear.style.display = "none";
      usaSpringSeasonFood.style.display = "none";
      usaSummerSeasonWear.style.display = "none";
      usaSummerSeasonFood.style.display = "none";
      usaWinterSeasonWear.style.display = "none";
      usaWinterSeasonFood.style.display = "none";
      germanyFallSeasonWear.style.display = "none";
      germanyFallSeasonFood.style.display = "none";
      germanySpringSeasonWear.style.display = "none";
      germanySpringSeasonFood.style.display = "none";
      germanySummerSeasonWear.style.display = "none";
      germanySummerSeasonFood.style.display = "none";
      germanyWinterSeasonWear.style.display = "none";
      germanyWinterSeasonFood.style.display = "none";
      franceFallSeasonWear.style.display = "none";
      franceFallSeasonFood.style.display = "none";
      franceSpringSeasonWear.style.display = "none";
      franceSpringSeasonFood.style.display = "none";
      franceWinterSeasonWear.style.display = "none";
      franceWinterSeasonFood.style.display = "none";
      canadaFallSeasonWear.style.display = "none";
      canadaFallSeasonFood.style.display = "none";
      canadaSpringSeasonWear.style.display = "none";
      canadaSpringSeasonFood.style.display = "none";
      canadaSummerSeasonWear.style.display = "none";
      canadaSummerSeasonFood.style.display = "none";
      canadaWinterSeasonWear.style.display = "none";
      canadaWinterSeasonFood.style.display = "none";

      // Show current country's info
      franceContent.style.display = "block";
      franceSummerSeasonWear.style.display = "block";
      franceSummerSeasonFood.style.display = "block";

      // Event listener for cloth
      franceSummerCloth1.addEventListener("click", () =>
        selectedCloth("france-summer-cloth-1", franceSummerClothList[0])
      );
      franceSummerCloth2.addEventListener("click", () =>
        selectedCloth("france-summer-cloth-2", franceSummerClothList[1])
      );
      franceSummerCloth3.addEventListener("click", () =>
        selectedCloth("france-summer-cloth-3", franceSummerClothList[2])
      );
      franceSummerCloth4.addEventListener("click", () =>
        selectedCloth("france-summer-cloth-4", franceSummerClothList[3])
      );
      franceSummerCloth5.addEventListener("click", () =>
        selectedCloth("france-summer-cloth-5", franceSummerClothList[4])
      );
      // Event listener for food
      franceSummerFood1.addEventListener("click", () =>
        selectedFood("france-summer-food-1", franceSummerFoodList[0])
      );
      franceSummerFood2.addEventListener("click", () =>
        selectedFood("france-summer-food-2", franceSummerFoodList[1])
      );
      franceSummerFood3.addEventListener("click", () =>
        selectedFood("france-summer-food-3", franceSummerFoodList[2])
      );
      franceSummerFood4.addEventListener("click", () =>
        selectedFood("france-summer-food-4", franceSummerFoodList[3])
      );
      franceSummerFood5.addEventListener("click", () =>
        selectedFood("france-summer-food-5", franceSummerFoodList[4])
      );
      // Check if the items are already displayed
      if (franceSummerCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of franceSummerClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById(
            "france-summer-cloth-" + cloth.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            itemContent.innerHTML = cloth.description;
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of franceSummerFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById(
            "france-summer-food-" + food.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }
    // Country is France & Season is Winter
    else if (
      countryDropdown.value === "France" &&
      seasonDropdown.value === "Winter"
    ) {
      // Hide the other country's content
      canadaContent.style.display = "none";
      germanyContent.style.display = "none";
      usaContent.style.display = "none";

      // Hide the other country's seasons & food
      usaFallSeasonWear.style.display = "none";
      usaFallSeasonFood.style.display = "none";
      usaSpringSeasonWear.style.display = "none";
      usaSpringSeasonFood.style.display = "none";
      usaSummerSeasonWear.style.display = "none";
      usaSummerSeasonFood.style.display = "none";
      usaWinterSeasonWear.style.display = "none";
      usaWinterSeasonFood.style.display = "none";
      germanyFallSeasonWear.style.display = "none";
      germanyFallSeasonFood.style.display = "none";
      germanySpringSeasonWear.style.display = "none";
      germanySpringSeasonFood.style.display = "none";
      germanySummerSeasonWear.style.display = "none";
      germanySummerSeasonFood.style.display = "none";
      germanyWinterSeasonWear.style.display = "none";
      germanyWinterSeasonFood.style.display = "none";
      franceFallSeasonWear.style.display = "none";
      franceFallSeasonFood.style.display = "none";
      franceSpringSeasonWear.style.display = "none";
      franceSpringSeasonFood.style.display = "none";
      franceSummerSeasonWear.style.display = "none";
      franceSummerSeasonFood.style.display = "none";
      canadaFallSeasonWear.style.display = "none";
      canadaFallSeasonFood.style.display = "none";
      canadaSpringSeasonWear.style.display = "none";
      canadaSpringSeasonFood.style.display = "none";
      canadaSummerSeasonWear.style.display = "none";
      canadaSummerSeasonFood.style.display = "none";
      canadaWinterSeasonWear.style.display = "none";
      canadaWinterSeasonFood.style.display = "none";

      // Show current country's info
      franceContent.style.display = "block";
      franceWinterSeasonWear.style.display = "block";
      franceWinterSeasonFood.style.display = "block";

      // Event listener for cloth
      franceWinterCloth1.addEventListener("click", () =>
        selectedCloth("france-winter-cloth-1", franceWinterClothList[0])
      );
      franceWinterCloth2.addEventListener("click", () =>
        selectedCloth("france-winter-cloth-2", franceWinterClothList[1])
      );
      franceWinterCloth3.addEventListener("click", () =>
        selectedCloth("france-winter-cloth-3", franceWinterClothList[2])
      );
      franceWinterCloth4.addEventListener("click", () =>
        selectedCloth("france-winter-cloth-4", franceWinterClothList[3])
      );
      franceWinterCloth5.addEventListener("click", () =>
        selectedCloth("france-winter-cloth-5", franceWinterClothList[4])
      );
      // Event listener for food
      franceWinterFood1.addEventListener("click", () =>
        selectedFood("france-winter-food-1", franceWinterFoodList[0])
      );
      franceWinterFood2.addEventListener("click", () =>
        selectedFood("france-winter-food-2", franceWinterFoodList[1])
      );
      franceWinterFood3.addEventListener("click", () =>
        selectedFood("france-winter-food-3", franceWinterFoodList[2])
      );
      franceWinterFood4.addEventListener("click", () =>
        selectedFood("france-winter-food-4", franceWinterFoodList[3])
      );
      franceWinterFood5.addEventListener("click", () =>
        selectedFood("france-winter-food-5", franceWinterFoodList[4])
      );
      // Check if the items are already displayed
      if (franceWinterCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of franceWinterClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById(
            "france-winter-cloth-" + cloth.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            itemContent.innerHTML = cloth.description;
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of franceWinterFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById(
            "france-winter-food-" + food.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }

    // Country is Germany & Season is Fall
    else if (
      countryDropdown.value === "Germany" &&
      seasonDropdown.value === "Fall"
    ) {
      // Hide the other country's content
      canadaContent.style.display = "none";
      franceContent.style.display = "none";
      usaContent.style.display = "none";

      // Hide the other country's seasons & food
      usaFallSeasonWear.style.display = "none";
      usaFallSeasonFood.style.display = "none";
      usaSpringSeasonWear.style.display = "none";
      usaSpringSeasonFood.style.display = "none";
      usaSummerSeasonWear.style.display = "none";
      usaSummerSeasonFood.style.display = "none";
      usaWinterSeasonWear.style.display = "none";
      usaWinterSeasonFood.style.display = "none";
      germanySpringSeasonWear.style.display = "none";
      germanySpringSeasonFood.style.display = "none";
      germanySummerSeasonWear.style.display = "none";
      germanySummerSeasonFood.style.display = "none";
      germanyWinterSeasonWear.style.display = "none";
      germanyWinterSeasonFood.style.display = "none";
      franceFallSeasonWear.style.display = "none";
      franceFallSeasonFood.style.display = "none";
      franceSpringSeasonWear.style.display = "none";
      franceSpringSeasonFood.style.display = "none";
      franceSummerSeasonWear.style.display = "none";
      franceSummerSeasonFood.style.display = "none";
      franceWinterSeasonWear.style.display = "none";
      franceWinterSeasonFood.style.display = "none";
      canadaFallSeasonWear.style.display = "none";
      canadaFallSeasonFood.style.display = "none";
      canadaSpringSeasonWear.style.display = "none";
      canadaSpringSeasonFood.style.display = "none";
      canadaSummerSeasonWear.style.display = "none";
      canadaSummerSeasonFood.style.display = "none";
      canadaWinterSeasonWear.style.display = "none";
      canadaWinterSeasonFood.style.display = "none";

      // Show current country's info
      germanyContent.style.display = "block";
      germanyFallSeasonWear.style.display = "block";
      germanyFallSeasonFood.style.display = "block";

      // Event listener for cloth
      germanyFallCloth1.addEventListener("click", () =>
        selectedCloth("germany-fall-cloth-1", germanyFallClothList[0])
      );
      germanyFallCloth2.addEventListener("click", () =>
        selectedCloth("germany-fall-cloth-2", germanyFallClothList[1])
      );
      germanyFallCloth3.addEventListener("click", () =>
        selectedCloth("germany-fall-cloth-3", germanyFallClothList[2])
      );
      germanyFallCloth4.addEventListener("click", () =>
        selectedCloth("germany-fall-cloth-4", germanyFallClothList[3])
      );
      germanyFallCloth5.addEventListener("click", () =>
        selectedCloth("germany-fall-cloth-5", germanyFallClothList[4])
      );
      // Event listener for food
      germanyFallFood1.addEventListener("click", () =>
        selectedCloth("germany-fall-food-1", germanyFallFoodList[0])
      );
      germanyFallFood2.addEventListener("click", () =>
        selectedCloth("germany-fall-food-2", germanyFallFoodList[1])
      );
      germanyFallFood3.addEventListener("click", () =>
        selectedCloth("germany-fall-food-3", germanyFallFoodList[2])
      );
      germanyFallFood4.addEventListener("click", () =>
        selectedCloth("germany-fall-food-4", germanyFallFoodList[3])
      );
      germanyFallFood5.addEventListener("click", () =>
        selectedCloth("germany-fall-food-5", germanyFallFoodList[4])
      );
      // Check if the items are already displayed
      if (germanyFallCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of germanyFallClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById(
            "germany-fall-cloth-" + cloth.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = cloth.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of germanyFallFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById("germany-fall-food-" + food.id);
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }
    // Country is Germany & Season is Spring
    else if (
      countryDropdown.value === "Germany" &&
      seasonDropdown.value === "Spring"
    ) {
      // Hide the other country's content
      canadaContent.style.display = "none";
      franceContent.style.display = "none";
      usaContent.style.display = "none";

      // Hide the other country's seasons & food
      usaFallSeasonWear.style.display = "none";
      usaFallSeasonFood.style.display = "none";
      usaSpringSeasonWear.style.display = "none";
      usaSpringSeasonFood.style.display = "none";
      usaSummerSeasonWear.style.display = "none";
      usaSummerSeasonFood.style.display = "none";
      usaWinterSeasonWear.style.display = "none";
      usaWinterSeasonFood.style.display = "none";
      germanyFallSeasonWear.style.display = "none";
      germanyFallSeasonFood.style.display = "none";
      germanySummerSeasonWear.style.display = "none";
      germanySummerSeasonFood.style.display = "none";
      germanyWinterSeasonWear.style.display = "none";
      germanyWinterSeasonFood.style.display = "none";
      franceFallSeasonWear.style.display = "none";
      franceFallSeasonFood.style.display = "none";
      franceSpringSeasonWear.style.display = "none";
      franceSpringSeasonFood.style.display = "none";
      franceSummerSeasonWear.style.display = "none";
      franceSummerSeasonFood.style.display = "none";
      franceWinterSeasonWear.style.display = "none";
      franceWinterSeasonFood.style.display = "none";
      canadaFallSeasonWear.style.display = "none";
      canadaFallSeasonFood.style.display = "none";
      canadaSpringSeasonWear.style.display = "none";
      canadaSpringSeasonFood.style.display = "none";
      canadaSummerSeasonWear.style.display = "none";
      canadaSummerSeasonFood.style.display = "none";
      canadaWinterSeasonWear.style.display = "none";
      canadaWinterSeasonFood.style.display = "none";

      // Show current country's info
      germanyContent.style.display = "block";
      germanySpringSeasonWear.style.display = "block";
      germanySpringSeasonFood.style.display = "block";

      // Event listener for cloth
      germanySpringCloth1.addEventListener("click", () =>
        selectedCloth("germany-spring-cloth-1", germanySpringClothList[0])
      );
      germanySpringCloth2.addEventListener("click", () =>
        selectedCloth("germany-spring-cloth-2", germanySpringClothList[1])
      );
      germanySpringCloth3.addEventListener("click", () =>
        selectedCloth("germany-spring-cloth-3", germanySpringClothList[2])
      );
      germanySpringCloth4.addEventListener("click", () =>
        selectedCloth("germany-spring-cloth-4", germanySpringClothList[3])
      );
      germanySpringCloth5.addEventListener("click", () =>
        selectedCloth("germany-spring-cloth-5", germanySpringClothList[4])
      );
      // Event listener for food
      germanySpringFood1.addEventListener("click", () =>
        selectedFood("germany-spring-food-1", germanySpringFoodList[0])
      );
      germanySpringFood2.addEventListener("click", () =>
        selectedFood("germany-spring-food-2", germanySpringFoodList[1])
      );
      germanySpringFood3.addEventListener("click", () =>
        selectedFood("germany-spring-food-3", germanySpringFoodList[2])
      );
      germanySpringFood4.addEventListener("click", () =>
        selectedFood("germany-spring-food-4", germanySpringFoodList[3])
      );
      germanySpringFood5.addEventListener("click", () =>
        selectedFood("germany-spring-food-5", germanySpringFoodList[4])
      );
      // Check if the items are already displayed
      if (germanySpringCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of germanySpringClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById(
            "germany-spring-cloth-" + cloth.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = cloth.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of germanySpringFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById(
            "germany-spring-food-" + food.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }
    // Country is Germany & Season is Summer
    else if (
      countryDropdown.value === "Germany" &&
      seasonDropdown.value === "Summer"
    ) {
      // Hide the other country's content
      canadaContent.style.display = "none";
      franceContent.style.display = "none";
      usaContent.style.display = "none";

      // Hide the other country's seasons & food
      usaFallSeasonWear.style.display = "none";
      usaFallSeasonFood.style.display = "none";
      usaSpringSeasonWear.style.display = "none";
      usaSpringSeasonFood.style.display = "none";
      usaSummerSeasonWear.style.display = "none";
      usaSummerSeasonFood.style.display = "none";
      usaWinterSeasonWear.style.display = "none";
      usaWinterSeasonFood.style.display = "none";
      germanyFallSeasonWear.style.display = "none";
      germanyFallSeasonFood.style.display = "none";
      germanySpringSeasonWear.style.display = "none";
      germanySpringSeasonFood.style.display = "none";
      germanyWinterSeasonWear.style.display = "none";
      germanyWinterSeasonFood.style.display = "none";
      franceFallSeasonWear.style.display = "none";
      franceFallSeasonFood.style.display = "none";
      franceSpringSeasonWear.style.display = "none";
      franceSpringSeasonFood.style.display = "none";
      franceSummerSeasonWear.style.display = "none";
      franceSummerSeasonFood.style.display = "none";
      franceWinterSeasonWear.style.display = "none";
      franceWinterSeasonFood.style.display = "none";
      canadaFallSeasonWear.style.display = "none";
      canadaFallSeasonFood.style.display = "none";
      canadaSpringSeasonWear.style.display = "none";
      canadaSpringSeasonFood.style.display = "none";
      canadaSummerSeasonWear.style.display = "none";
      canadaSummerSeasonFood.style.display = "none";
      canadaWinterSeasonWear.style.display = "none";
      canadaWinterSeasonFood.style.display = "none";

      // Show current country's info
      germanyContent.style.display = "block";
      germanySummerSeasonWear.style.display = "block";
      germanySummerSeasonFood.style.display = "block";

      // Event listener for cloth
      germanySummerCloth1.addEventListener("click", () =>
        selectedCloth("germany-summer-cloth-1", germanySummerClothList[0])
      );
      germanySummerCloth2.addEventListener("click", () =>
        selectedCloth("germany-summer-cloth-2", germanySummerClothList[1])
      );
      germanySummerCloth3.addEventListener("click", () =>
        selectedCloth("germany-summer-cloth-3", germanySummerClothList[2])
      );
      germanySummerCloth4.addEventListener("click", () =>
        selectedCloth("germany-summer-cloth-4", germanySummerClothList[3])
      );
      germanySummerCloth5.addEventListener("click", () =>
        selectedCloth("germany-summer-cloth-5", germanySummerClothList[4])
      );
      // Event listener for food
      germanySummerFood1.addEventListener("click", () =>
        selectedFood("germany-summer-food-1", germanySummerFoodList[0])
      );
      germanySummerFood2.addEventListener("click", () =>
        selectedFood("germany-summer-food-2", germanySummerFoodList[1])
      );
      germanySummerFood3.addEventListener("click", () =>
        selectedFood("germany-summer-food-3", germanySummerFoodList[2])
      );
      germanySummerFood4.addEventListener("click", () =>
        selectedFood("germany-summer-food-4", germanySummerFoodList[3])
      );
      germanySummerFood5.addEventListener("click", () =>
        selectedFood("germany-summer-food-5", germanySummerFoodList[4])
      );
      // Check if the items are already displayed
      if (germanySummerCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of germanySummerClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById(
            "germany-summer-cloth-" + cloth.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = cloth.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of germanySummerFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById(
            "germany-summer-food-" + food.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }
    // Country is Germany & Season is Winter
    else if (
      countryDropdown.value === "Germany" &&
      seasonDropdown.value === "Winter"
    ) {
      // Hide the other country's content
      canadaContent.style.display = "none";
      franceContent.style.display = "none";
      usaContent.style.display = "none";

      // Hide the other country's seasons & food
      usaFallSeasonWear.style.display = "none";
      usaFallSeasonFood.style.display = "none";
      usaSpringSeasonWear.style.display = "none";
      usaSpringSeasonFood.style.display = "none";
      usaSummerSeasonWear.style.display = "none";
      usaSummerSeasonFood.style.display = "none";
      usaWinterSeasonWear.style.display = "none";
      usaWinterSeasonFood.style.display = "none";
      germanyFallSeasonWear.style.display = "none";
      germanyFallSeasonFood.style.display = "none";
      germanySpringSeasonWear.style.display = "none";
      germanySpringSeasonFood.style.display = "none";
      germanySummerSeasonWear.style.display = "none";
      germanySummerSeasonFood.style.display = "none";
      franceFallSeasonWear.style.display = "none";
      franceFallSeasonFood.style.display = "none";
      franceSpringSeasonWear.style.display = "none";
      franceSpringSeasonFood.style.display = "none";
      franceSummerSeasonWear.style.display = "none";
      franceSummerSeasonFood.style.display = "none";
      franceWinterSeasonWear.style.display = "none";
      franceWinterSeasonFood.style.display = "none";
      canadaFallSeasonWear.style.display = "none";
      canadaFallSeasonFood.style.display = "none";
      canadaSpringSeasonWear.style.display = "none";
      canadaSpringSeasonFood.style.display = "none";
      canadaSummerSeasonWear.style.display = "none";
      canadaSummerSeasonFood.style.display = "none";
      canadaWinterSeasonWear.style.display = "none";
      canadaWinterSeasonFood.style.display = "none";

      // Show current country's info
      germanyContent.style.display = "block";
      germanyWinterSeasonWear.style.display = "block";
      germanyWinterSeasonFood.style.display = "block";

      // Event listener for cloth
      germanyWinterCloth1.addEventListener("click", () =>
        selectedCloth("germany-winter-cloth-1", germanyWinterClothList[0])
      );
      germanyWinterCloth2.addEventListener("click", () =>
        selectedCloth("germany-winter-cloth-2", germanyWinterClothList[1])
      );
      germanyWinterCloth3.addEventListener("click", () =>
        selectedCloth("germany-winter-cloth-3", germanyWinterClothList[2])
      );
      germanyWinterCloth4.addEventListener("click", () =>
        selectedCloth("germany-winter-cloth-4", germanyWinterClothList[3])
      );
      germanyWinterCloth5.addEventListener("click", () =>
        selectedCloth("germany-winter-cloth-5", germanyWinterClothList[4])
      );
      // Event listener for food
      germanyWinterFood1.addEventListener("click", () =>
        selectedFood("germany-winter-food-1", germanyWinterFoodList[0])
      );
      germanyWinterFood2.addEventListener("click", () =>
        selectedFood("germany-winter-food-2", germanyWinterFoodList[1])
      );
      germanyWinterFood3.addEventListener("click", () =>
        selectedFood("germany-winter-food-3", germanyWinterFoodList[2])
      );
      germanyWinterFood4.addEventListener("click", () =>
        selectedFood("germany-winter-food-4", germanyWinterFoodList[3])
      );
      germanyWinterFood5.addEventListener("click", () =>
        selectedFood("germany-winter-food-5", germanyWinterFoodList[4])
      );
      // Check if the items are already displayed
      if (germanyWinterCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of germanyWinterClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById(
            "germany-winter-cloth-" + cloth.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = cloth.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of germanyWinterFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById(
            "germany-winter-food-" + food.id
          );
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }

    // Country is USA & Season is Fall
    else if (
      countryDropdown.value === "USA" &&
      seasonDropdown.value === "Fall"
    ) {
      // Hide the other country's content
      canadaContent.style.display = "none";
      franceContent.style.display = "none";
      germanyContent.style.display = "none";

      // Hide the other country's seasons & food
      usaSpringSeasonWear.style.display = "none";
      usaSpringSeasonFood.style.display = "none";
      usaSummerSeasonWear.style.display = "none";
      usaSummerSeasonFood.style.display = "none";
      usaWinterSeasonWear.style.display = "none";
      usaWinterSeasonFood.style.display = "none";
      germanyFallSeasonWear.style.display = "none";
      germanyFallSeasonFood.style.display = "none";
      germanySpringSeasonWear.style.display = "none";
      germanySpringSeasonFood.style.display = "none";
      germanySummerSeasonWear.style.display = "none";
      germanySummerSeasonFood.style.display = "none";
      germanyWinterSeasonWear.style.display = "none";
      germanyWinterSeasonFood.style.display = "none";
      franceFallSeasonWear.style.display = "none";
      franceFallSeasonFood.style.display = "none";
      franceSpringSeasonWear.style.display = "none";
      franceSpringSeasonFood.style.display = "none";
      franceSummerSeasonWear.style.display = "none";
      franceSummerSeasonFood.style.display = "none";
      franceWinterSeasonWear.style.display = "none";
      franceWinterSeasonFood.style.display = "none";
      canadaFallSeasonWear.style.display = "none";
      canadaFallSeasonFood.style.display = "none";
      canadaSpringSeasonWear.style.display = "none";
      canadaSpringSeasonFood.style.display = "none";
      canadaSummerSeasonWear.style.display = "none";
      canadaSummerSeasonFood.style.display = "none";
      canadaWinterSeasonWear.style.display = "none";
      canadaWinterSeasonFood.style.display = "none";

      // Show current country's info
      usaContent.style.display = "block";
      usaFallSeasonWear.style.display = "block";
      usaFallSeasonFood.style.display = "block";

      // Event listener for cloth
      usaFallCloth1.addEventListener("click", () =>
        selectedCloth("usa-fall-cloth-1", usaFallClothList[0])
      );
      usaFallCloth2.addEventListener("click", () =>
        selectedCloth("usa-fall-cloth-2", usaFallClothList[1])
      );
      usaFallCloth3.addEventListener("click", () =>
        selectedCloth("usa-fall-cloth-3", usaFallClothList[2])
      );
      usaFallCloth4.addEventListener("click", () =>
        selectedCloth("usa-fall-cloth-4", usaFallClothList[3])
      );
      usaFallCloth5.addEventListener("click", () =>
        selectedCloth("usa-fall-cloth-5", usaFallClothList[4])
      );
      // Event listener for food
      usaFallFood1.addEventListener("click", () =>
        selectedFood("usa-fall-food-1", usaFallFoodList[0])
      );
      usaFallFood2.addEventListener("click", () =>
        selectedFood("usa-fall-food-2", usaFallFoodList[1])
      );
      usaFallFood3.addEventListener("click", () =>
        selectedFood("usa-fall-food-3", usaFallFoodList[2])
      );
      usaFallFood4.addEventListener("click", () =>
        selectedFood("usa-fall-food-4", usaFallFoodList[3])
      );
      usaFallFood5.addEventListener("click", () =>
        selectedFood("usa-fall-food-5", usaFallFoodList[4])
      );
      // Check if the items are already displayed
      if (usaFallCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of usaFallClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById("usa-fall-cloth-" + cloth.id);
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = cloth.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of usaFallFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById("usa-fall-food-" + food.id);
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }
    // Country is USA & Season is Spring
    else if (
      countryDropdown.value === "USA" &&
      seasonDropdown.value === "Spring"
    ) {
      // Hide the other country's content
      canadaContent.style.display = "none";
      franceContent.style.display = "none";
      germanyContent.style.display = "none";

      // Hide the other country's seasons & food
      usaFallSeasonWear.style.display = "none";
      usaFallSeasonFood.style.display = "none";
      usaSummerSeasonWear.style.display = "none";
      usaSummerSeasonFood.style.display = "none";
      usaWinterSeasonWear.style.display = "none";
      usaWinterSeasonFood.style.display = "none";
      germanyFallSeasonWear.style.display = "none";
      germanyFallSeasonFood.style.display = "none";
      germanySpringSeasonWear.style.display = "none";
      germanySpringSeasonFood.style.display = "none";
      germanySummerSeasonWear.style.display = "none";
      germanySummerSeasonFood.style.display = "none";
      germanyWinterSeasonWear.style.display = "none";
      germanyWinterSeasonFood.style.display = "none";
      franceFallSeasonWear.style.display = "none";
      franceFallSeasonFood.style.display = "none";
      franceSpringSeasonWear.style.display = "none";
      franceSpringSeasonFood.style.display = "none";
      franceSummerSeasonWear.style.display = "none";
      franceSummerSeasonFood.style.display = "none";
      franceWinterSeasonWear.style.display = "none";
      franceWinterSeasonFood.style.display = "none";
      canadaFallSeasonWear.style.display = "none";
      canadaFallSeasonFood.style.display = "none";
      canadaSpringSeasonWear.style.display = "none";
      canadaSpringSeasonFood.style.display = "none";
      canadaSummerSeasonWear.style.display = "none";
      canadaSummerSeasonFood.style.display = "none";
      canadaWinterSeasonWear.style.display = "none";
      canadaWinterSeasonFood.style.display = "none";

      // Show current country's info
      usaContent.style.display = "block";
      usaSpringSeasonWear.style.display = "block";
      usaSpringSeasonFood.style.display = "block";

      // Event listener for cloth
      usaSpringCloth1.addEventListener("click", () =>
        selectedCloth("usa-spring-cloth-1", usaSpringClothList[0])
      );
      usaSpringCloth2.addEventListener("click", () =>
        selectedCloth("usa-spring-cloth-2", usaSpringClothList[1])
      );
      usaSpringCloth3.addEventListener("click", () =>
        selectedCloth("usa-spring-cloth-3", usaSpringClothList[2])
      );
      usaSpringCloth4.addEventListener("click", () =>
        selectedCloth("usa-spring-cloth-4", usaSpringClothList[3])
      );
      usaSpringCloth5.addEventListener("click", () =>
        selectedCloth("usa-spring-cloth-5", usaSpringClothList[4])
      );
      // Event listener for food
      usaSpringFood1.addEventListener("click", () =>
        selectedFood("usa-spring-food-1", usaSpringFoodList[0])
      );
      usaSpringFood2.addEventListener("click", () =>
        selectedFood("usa-spring-food-2", usaSpringFoodList[1])
      );
      usaSpringFood3.addEventListener("click", () =>
        selectedFood("usa-spring-food-3", usaSpringFoodList[2])
      );
      usaSpringFood4.addEventListener("click", () =>
        selectedFood("usa-spring-food-4", usaSpringFoodList[3])
      );
      usaSpringFood5.addEventListener("click", () =>
        selectedFood("usa-spring-food-5", usaSpringFoodList[4])
      );
      // Check if the items are already displayed
      if (usaSpringCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of usaSpringClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById("usa-spring-cloth-" + cloth.id);
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = cloth.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of usaSpringFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById("usa-spring-food-" + food.id);
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }
    // Country is USA & Season is Summer
    else if (
      countryDropdown.value === "USA" &&
      seasonDropdown.value === "Summer"
    ) {
      // Hide the other country's content
      canadaContent.style.display = "none";
      franceContent.style.display = "none";
      germanyContent.style.display = "none";

      // Hide the other country's seasons & food
      usaFallSeasonWear.style.display = "none";
      usaFallSeasonFood.style.display = "none";
      usaSpringSeasonWear.style.display = "none";
      usaSpringSeasonFood.style.display = "none";
      usaWinterSeasonWear.style.display = "none";
      usaWinterSeasonFood.style.display = "none";
      germanyFallSeasonWear.style.display = "none";
      germanyFallSeasonFood.style.display = "none";
      germanySpringSeasonWear.style.display = "none";
      germanySpringSeasonFood.style.display = "none";
      germanySummerSeasonWear.style.display = "none";
      germanySummerSeasonFood.style.display = "none";
      germanyWinterSeasonWear.style.display = "none";
      germanyWinterSeasonFood.style.display = "none";
      franceFallSeasonWear.style.display = "none";
      franceFallSeasonFood.style.display = "none";
      franceSpringSeasonWear.style.display = "none";
      franceSpringSeasonFood.style.display = "none";
      franceSummerSeasonWear.style.display = "none";
      franceSummerSeasonFood.style.display = "none";
      franceWinterSeasonWear.style.display = "none";
      franceWinterSeasonFood.style.display = "none";
      canadaFallSeasonWear.style.display = "none";
      canadaFallSeasonFood.style.display = "none";
      canadaSpringSeasonWear.style.display = "none";
      canadaSpringSeasonFood.style.display = "none";
      canadaSummerSeasonWear.style.display = "none";
      canadaSummerSeasonFood.style.display = "none";
      canadaWinterSeasonWear.style.display = "none";
      canadaWinterSeasonFood.style.display = "none";

      // Show current country's info
      usaContent.style.display = "block";
      usaSummerSeasonWear.style.display = "block";
      usaSummerSeasonFood.style.display = "block";

      // Event listener for cloth
      usaSummerCloth1.addEventListener("click", () =>
        selectedCloth("usa-summer-cloth-1", usaSummerClothList[0])
      );
      usaSummerCloth2.addEventListener("click", () =>
        selectedCloth("usa-summer-cloth-2", usaSummerClothList[1])
      );
      usaSummerCloth3.addEventListener("click", () =>
        selectedCloth("usa-summer-cloth-3", usaSummerClothList[2])
      );
      usaSummerCloth4.addEventListener("click", () =>
        selectedCloth("usa-summer-cloth-4", usaSummerClothList[3])
      );
      usaSummerCloth5.addEventListener("click", () =>
        selectedCloth("usa-summer-cloth-5", usaSummerClothList[4])
      );
      // Event listener for food
      usaSummerFood1.addEventListener("click", () =>
        selectedFood("usa-summer-food-1", usaSummerFoodList[0])
      );
      usaSummerFood2.addEventListener("click", () =>
        selectedFood("usa-summer-food-2", usaSummerFoodList[1])
      );
      usaSummerFood3.addEventListener("click", () =>
        selectedFood("usa-summer-food-3", usaSummerFoodList[2])
      );
      usaSummerFood4.addEventListener("click", () =>
        selectedFood("usa-summer-food-4", usaSummerFoodList[3])
      );
      usaSummerFood5.addEventListener("click", () =>
        selectedFood("usa-summer-food-5", usaSummerFoodList[4])
      );
      // Check if the items are already displayed
      if (usaSummerCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of usaSummerClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById("usa-summer-cloth-" + cloth.id);
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = cloth.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of usaSummerFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById("usa-summer-food-" + food.id);
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }
    // Country is USA & Season is Winter
    else if (
      countryDropdown.value === "USA" &&
      seasonDropdown.value === "Winter"
    ) {
      // Hide the other country's content
      canadaContent.style.display = "none";
      franceContent.style.display = "none";
      germanyContent.style.display = "none";

      // Hide the other country's seasons & food
      usaFallSeasonWear.style.display = "none";
      usaFallSeasonFood.style.display = "none";
      usaSpringSeasonWear.style.display = "none";
      usaSpringSeasonFood.style.display = "none";
      usaSummerSeasonWear.style.display = "none";
      usaSummerSeasonFood.style.display = "none";
      germanyFallSeasonWear.style.display = "none";
      germanyFallSeasonFood.style.display = "none";
      germanySpringSeasonWear.style.display = "none";
      germanySpringSeasonFood.style.display = "none";
      germanySummerSeasonWear.style.display = "none";
      germanySummerSeasonFood.style.display = "none";
      germanyWinterSeasonWear.style.display = "none";
      germanyWinterSeasonFood.style.display = "none";
      franceFallSeasonWear.style.display = "none";
      franceFallSeasonFood.style.display = "none";
      franceSpringSeasonWear.style.display = "none";
      franceSpringSeasonFood.style.display = "none";
      franceSummerSeasonWear.style.display = "none";
      franceSummerSeasonFood.style.display = "none";
      franceWinterSeasonWear.style.display = "none";
      franceWinterSeasonFood.style.display = "none";
      canadaFallSeasonWear.style.display = "none";
      canadaFallSeasonFood.style.display = "none";
      canadaSpringSeasonWear.style.display = "none";
      canadaSpringSeasonFood.style.display = "none";
      canadaSummerSeasonWear.style.display = "none";
      canadaSummerSeasonFood.style.display = "none";
      canadaWinterSeasonWear.style.display = "none";
      canadaWinterSeasonFood.style.display = "none";

      // Show current country's info
      usaContent.style.display = "block";
      usaWinterSeasonWear.style.display = "block";
      usaWinterSeasonFood.style.display = "block";

      // Event listener for cloth
      usaWinterCloth1.addEventListener("click", () =>
        selectedCloth("usa-winter-cloth-1", usaWinterClothList[0])
      );
      usaWinterCloth2.addEventListener("click", () =>
        selectedCloth("usa-winter-cloth-2", usaWinterClothList[1])
      );
      usaWinterCloth3.addEventListener("click", () =>
        selectedCloth("usa-winter-cloth-3", usaWinterClothList[2])
      );
      usaWinterCloth4.addEventListener("click", () =>
        selectedCloth("usa-winter-cloth-4", usaWinterClothList[3])
      );
      usaWinterCloth5.addEventListener("click", () =>
        selectedCloth("usa-winter-cloth-5", usaWinterClothList[4])
      );
      // Event listener for food
      usaWinterFood1.addEventListener("click", () =>
        selectedCloth("usa-winter-food-1", usaWinterFoodList[0])
      );
      usaWinterFood2.addEventListener("click", () =>
        selectedCloth("usa-winter-food-2", usaWinterFoodList[1])
      );
      usaWinterFood3.addEventListener("click", () =>
        selectedCloth("usa-winter-food-3", usaWinterFoodList[2])
      );
      usaWinterFood4.addEventListener("click", () =>
        selectedCloth("usa-winter-food-4", usaWinterFoodList[3])
      );
      usaWinterFood5.addEventListener("click", () =>
        selectedCloth("usa-winter-food-5", usaWinterFoodList[4])
      );
      // Check if the items are already displayed
      if (usaWinterCloth1.querySelector("img") === null) {
        // Iterate the clothes for fall season
        for (let cloth of usaWinterClothList) {
          // Get the country's cloth from DOM
          let element = document.getElementById("usa-winter-cloth-" + cloth.id);
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = cloth.imgurl;
          image.alt = cloth.title;
          title.innerHTML = cloth.title;
          price.innerHTML = cloth.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = cloth.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }

        // Iterate the food for fall season
        for (let food of usaWinterFoodList) {
          // Get the country's food from DOM
          let element = document.getElementById("usa-winter-food-" + food.id);
          // Create the element
          let image = document.createElement("img");
          let title = document.createElement("h5");
          let price = document.createElement("h5");
          let infoButton = document.createElement("button");
          let content = document.createElement("div");
          let itemContent = document.createElement("p");
          content.setAttribute("id", "item-content");
          infoButton.setAttribute("id", "info-button");
          // Assign the value
          infoButton.innerHTML = "i";
          image.src = food.imgurl;
          image.alt = food.title;
          title.innerHTML = food.title;
          price.innerHTML = food.price;
          // Append the element
          element.appendChild(image);
          element.appendChild(title);
          element.appendChild(price);
          element.appendChild(infoButton);
          // Listen for onmouseover & onmouseout events
          infoButton.onmouseover = showContent;
          infoButton.onmouseout = hideContent;
          // Show the product info on mouseover
          function showContent() {
            // Assign the value
            itemContent.innerHTML = food.description;
            // Append the element
            content.appendChild(itemContent);
            element.appendChild(content);
            // Show the content
            content.style.display = "block";
          }
          // Hide the product info on mouseout
          function hideContent() {
            // Hide the content
            content.style.display = "none";
          }
          element.appendChild(content);
        }
      }
    }
  }
}

// Function to check the items selected by the user
function checkCart() {
  if (userCart.length > 0) {
    getItemButton.style.visibility = "visible";
    getItemButton.onclick = displayItem;
    // Function to iterate the items and display the items on the screen
    function displayItem() {
      for (let item of userCart) {
        // Check to remove the duplicates
        if (!checkSelectedProduct.includes(item.title)) {
          checkSelectedProduct.push(item.title);
          let selectedProduct = document.getElementById("selected-product");
          // Create the element
          let displayItem = document.getElementById("display-item");
          let element = document.createElement("div");
          let image = document.createElement("img");
          // Assign the values
          element.setAttribute("id", "selected-image");
          image.src = item.imgurl;
          image.alt = item.title;
          // Append the element
          element.appendChild(image);
          displayItem.appendChild(element);
          displayItem.style.display = "flex";
          selectedProduct.style.display = "block";
        }
      }
    }
  }
}
