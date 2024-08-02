// Import the navbar component from the components directory
import navbar from "../components/navbar.js";

// Select the <nav> element in the HTML document
const nav = document.querySelector("nav");

// Set the inner HTML of the <nav> element to the navbar component
nav.innerHTML = navbar();

// Select the <form> element in the HTML document
const form = document.querySelector("form");

// Add an event listener to the form to handle the submit event
form.addEventListener("submit", (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the value entered in the search input field
  const searchValue = document.querySelector("input").value;

  // Log the search value to the console for debugging purposes
  console.log(searchValue);

  // Fetch data from the MealDB API using the search value
  getData(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
  );

  // Clear the search input field
  document.querySelector("input").value = "";
});

/**
 * Fetch data from the specified URL
 */
async function getData(url) {
  try {
    // Await the fetch request to the URL and get the response
    const res = await fetch(url);

    // Await the conversion of the response to JSON format
    const data = await res.json();

    // Log the fetched data to the console for debugging purposes
    console.log(data);

    // Call the displayData function to display the fetched data on the webpage
    displayData(data.meals);
  } catch (error) {
    // Log any errors that occur during the fetch request
    console.log(error);
  }
}

/**
 * Display the fetched data in the HTML document
 */
function displayData(data) {
  // Select the container element where the recipe data will be displayed
  const container = document.querySelector(".container");

  // Clear any existing content in the container
  container.innerHTML = "";

  // Iterate over each meal object in the data array
  data.forEach((ele) => {
    // Create a new div element to act as a card for the recipe
    const card = document.createElement("div");
    card.classList.add("card");

    // Create an img element for the recipe image and set its source
    const image = document.createElement("img");
    image.src = ele.strMealThumb;

    // Create an h3 element for the recipe name and set its text content
    const title = document.createElement("h3");
    title.innerText = ele.strMeal;

    // Create an h4 element for the recipe category and set its text content
    const category = document.createElement("h4");
    category.innerText = ele.strCategory;

    // Create a p element for the recipe instructions and set its text content
    const instructions = document.createElement("p");
    instructions.innerText = ele.strInstructions;

    // Append the image, title, category, and instructions to the card
    card.append(image, title, category, instructions);

    // Append the card to the container
    container.append(card);
  });
}
