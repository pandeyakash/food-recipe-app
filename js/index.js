// Import the navbar component
import navbar from "../components/navbar.js";

// Select the <nav> element in the HTML
const nav = document.querySelector("nav");

// Insert the navbar HTML into the <nav> element
nav.innerHTML = navbar();

// Fetch random recipe data from the MealDB API
getData(`https://www.themealdb.com/api/json/v1/1/random.php`);

/**
 * Fetch data from the given URL
 */
async function getData(url) {
  // Await the fetch call to get the response
  const res = await fetch(url);

  // Await the JSON conversion of the response data
  const data = await res.json();

  // Log the data to the console for debugging purposes
  console.log(data);

  // Display the fetched data on the webpage
  displayData(data);
}

/**
 * Display the fetched data in the HTML
 */
function displayData(data) {
  // Select the container element where the data will be displayed
  const container = document.querySelector(".container");

  // Clear any existing content in the container
  container.innerHTML = "";

  // Log the meal name to the console for debugging purposes
  console.log(data.meals[0].strMeal);

  // Create a new div element for the recipe card
  const card = document.createElement("div");
  card.classList.add("card");

  // Create an img element for the recipe image
  const image = document.createElement("img");
  image.src = data.meals[0].strMealThumb;

  // Create an h3 element for the recipe name
  const title = document.createElement("h3");
  title.textContent = `Name: ${data.meals[0].strMeal}`;

  // Create an h4 element for the recipe category
  const category = document.createElement("h4");
  category.textContent = `Category: ${data.meals[0].strCategory}`;

  // Create a p element for the recipe instructions
  const instructions = document.createElement("p");
  instructions.textContent = `Instructions: ${data.meals[0].strInstructions}`;

  // Append the image, title, category, and instructions to the card
  card.append(image, title, category, instructions);

  // Append the card to the container
  container.append(card);
}
