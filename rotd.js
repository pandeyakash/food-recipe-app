import navbar from "./components/navbar.js";

const nav = document.querySelector("nav");

nav.innerHTML = navbar();

getData(`https://www.themealdb.com/api/json/v1/1/random.php`);

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  displayData(data);
}

function displayData(data) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  console.log(data.meals[0].strMeal);

  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = data.meals[0].strMealThumb;

  const title = document.createElement("h3");
  title.textContent = `Name: ${data.meals[0].strMeal}`;

  const category = document.createElement("h4");
  category.textContent = `Category: ${data.meals[0].strCategory}`;

  const instructions = document.createElement("p");
  instructions.textContent = `Instructions: ${data.meals[0].strInstructions}`;

  card.append(image, title, category, instructions);
  container.append(card);
}
