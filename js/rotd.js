// Import the navbar component from the components directory
import navbar from "../components/navbar.js";

// Select the <nav> element in the HTML document
const nav = document.querySelector("nav");

// Set the inner HTML of the <nav> element to the navbar component
nav.innerHTML = navbar();

// Call the getData function to fetch a random recipe from the MealDB API
getData(`https://www.themealdb.com/api/json/v1/1/random.php`);

/**
 * Fetch data from the specified URL
 */
async function getData(url) {
  // Await the fetch request to the URL and get the response
  const res = await fetch(url);

  // Await the conversion of the response to JSON format
  const data = await res.json();

  // Log the fetched data to the console for debugging purposes
  console.log(data);

  // Call the displayData function to display the fetched data on the webpage
  displayData(data);
}

/**
 * Display the fetched data in the HTML document
 */
function displayData(data) {
  // Select the container element where the recipe data will be displayed
  const container = document.querySelector(".container");

  // Clear any existing content in the container
  container.innerHTML = "";

  // Log the name of the meal to the console for debugging purposes
  console.log(data.meals[0].strMeal);

  // Create a new div element to act as a card for the recipe
  const card = document.createElement("div");
  card.classList.add("card");

  // Create an img element for the recipe image and set its source
  const image = document.createElement("img");
  image.src = data.meals[0].strMealThumb;

  // Create an h3 element for the recipe name and set its text content
  const title = document.createElement("h3");
  title.textContent = `Name: ${data.meals[0].strMeal}`;

  // Create an h4 element for the recipe category and set its text content
  const category = document.createElement("h4");
  category.textContent = `Category: ${data.meals[0].strCategory}`;

  // Create a p element for the recipe instructions and set its text content
  const instructions = document.createElement("p");
  instructions.textContent = `Instructions: ${data.meals[0].strInstructions}`;

  // Append the image, title, category, and instructions to the card
  card.append(image, title, category, instructions);

  // Append the card to the container
  container.append(card);
}
