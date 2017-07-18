const recipeContainer = document.querySelector(".recipes")
const recipeList = document.querySelector(".recipe-list")
const button = document.querySelector("button")


button.addEventListener("click", searchEvent => {
  let searchTerm = document.querySelector("#search").value
  const promise = fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=${searchTerm}`)
  .then(response => response.json())
  .then(recipes => {
    recipeList.innerHTML = ""
    recipes.results.forEach(function (recipeData, index) {
      const indRecipe = document.createElement("li")
      const title = document.createElement("h2")
      const image = document.createElement("img")
      const link = document.createElement("a")
      link.href = recipeData.href
      title.textContent = recipeData.title
      if (recipeData.thumbnail) {
        image.src = recipeData.thumbnail
      } else {
        image.src = "http://via.placeholder.com/172x130"
      }
      recipeList.appendChild(indRecipe)
      link.appendChild(image)
      link.appendChild(title)
      indRecipe.appendChild(link)
    })
  })
})
