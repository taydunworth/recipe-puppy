const recipeContainer = document.querySelector(".recipes")
const recipeList = document.querySelector(".recipe-list")
let searchterm = 'omelette'

const promise = fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=${searchterm}`)
  .then(response => response.json())
  .then(recipes => {
    console.log(recipes);
  recipes.results.forEach(function (recipeData, index) {
    const indRecipe = document.createElement("li")
    const title = document.createElement("h2")
    const image = document.createElement("img")
    title.textContent = recipeData.title
    image.src = recipeData.thumbnail
    recipeList.appendChild(indRecipe)
    indRecipe.appendChild(image)
    indRecipe.appendChild(title)
  })
})
