//  let recipe = document.querySelector('#input').value;
//  let search = document.querySelector('#search');
 let Api_key= '68e0b0e9c4a56b66df9e08da7761a475';
 let appID ='5209fbd7';
 let recipeContainer =document.getElementById('recipeContainer')

//  let searchQuerry = "";
//  function querry(){
//     searchQuerry = document.querySelector('#input').value;
//  }
 
//  search.addEventListener('click',getRecipe);
 let search = document.querySelector('form');
 search.addEventListener('submit',(e)=>{
    e.preventDefault();
    let searchQuerry =document.querySelector('#input').value;
    let baseURL =`https://api.edamam.com/search?q=${searchQuerry}&app_id=${appID}&app_key=${Api_key}`;
   getRecipe(baseURL);
 });



 function getRecipe(url){
   fetch(url).then(response=>response.json()).then(data=>{
    console.log(data.hits)
    if(data.hits.length>0){
        showOptions(data.hits)
    }
    else{
        let items ='<h1>Sorry, no match found</h1>';
    recipeContainer.innerHTML=items
    }
   }
   );
   
}
function showOptions(data){
    let items ='';
    data.map(data=>{
items +=`
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
    recipeContainer.innerHTML=items
}


