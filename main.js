const recipeContainer = document.querySelector(".recipes")
const title = document.createElement("h2")
const image = document.createElement("img")

const promise = fetch("http://www.recipepuppy.com/api/")
  .then(response => response.json())
  .then(recipes => {
    console.log(recipes);
  })
  // recipes.results.forEach(function (person, index) {
  //   const characterInd = document.createElement("li")
  //   characterInd.textContent = person.name
  //   characters.appendChild(characterInd)
