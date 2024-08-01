import navbar from "./components/navbar.js";

const nav = document.querySelector("nav");

nav.innerHTML = navbar();

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = document.querySelector("input").value;
  console.log(searchValue);
  getData(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
  );
  document.querySelector("input").value = "";
});

async function getData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    displayData(data.meals);
  } catch (error) {
    console.log(error);
  }
}

function displayData(data) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  data.forEach((ele) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = ele.strMealThumb;

    const title = document.createElement("h3");
    title.innerText = ele.strMeal;

    const category = document.createElement("h4");
    category.innerText = ele.strCategory;

    const instructions = document.createElement("p");
    instructions.innerText = ele.strInstructions;

    card.append(image, title, category, instructions);

    container.append(card);
  });
}
