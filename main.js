const recipeContainer = document.querySelector(".recipes")
const title = document.createElement("h2")
const image = document.createElement("img")
const recipeList = document.querySelector(".recipe-list")
let searchterm = 'schnauzer'

const promise = fetch(`http://www.recipepuppy.com/api/?q=${searchterm}`, {mode: 'no-cors'})
  .then(response => response.json())
  .then(recipes => {
    console.log(recipes);
  })
  // recipes.forEach(function (recipe, index) {
  //   const indRecipe = document.createElement("li")
  //   title.textContent = recipes.title
  //   image.src = recipes.thumbnail
  //   recipeList.appendChild(indRecipe)
  //   indRecipe.appendChild(img)
  //   indRecipe.appendChild(title)
