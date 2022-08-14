
let Api_key = '68e0b0e9c4a56b66df9e08da7761a475';
let appID = '5209fbd7';
let recipeContainer = document.getElementById('recipeContainer')

//using edamam food recipe api 
let search = document.querySelector('form');
search.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchQuerry = document.querySelector('#input').value;
    let baseURL = `https://api.edamam.com/search?q=${searchQuerry}&app_id=${appID}&app_key=${Api_key}`;
    getRecipe(baseURL);
});




function getRecipe(url) {
    //geting data in the json format
    fetch(url).then(response => response.json()).
        then(data => {
            if (data.hits.length > 0) {
    //passing the recipe data to showOptions function 
                showOptions(data.hits)
            }
            else {
                let items = '<h1>Sorry, no match found</h1>';
                recipeContainer.innerHTML = items
            }
        }
        );

}

//using the passed data to show recipe boxes by using map method on each element of the array
function showOptions(data) {
    let items = '';
    data.map(data => {
        items += `
<div class="recipeBox ">
<img src="${data.recipe.image}" alt="">
<div class="details">
<h2>${data.recipe.label}</h2>

<div>Calories: ${data.recipe.calories.toFixed(2)}</div>
<div>Cuisine Type: ${data.recipe.cuisineType}</div>
<div>Dish Type: ${data.recipe.dishType}</div>
</div>
<button class="getRecipe"><a href="${data.recipe.url}">Get Recipe</a></button>
</div>`;
    })
    recipeContainer.innerHTML = items
}


