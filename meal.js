const loadMeals = (serchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serchText}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMeals(data.meals))

}

const displayMeals = meals =>{
    // console.log(meals)
    const melasContainerr = document.getElementById('melasContainer');
    melasContainerr.innerHTML='';
    meals.forEach(meal => {
        console.log(meal)
const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML =`
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class= mt-5 >  Area : ${meal.strArea} Food</p>
             <p class= mt-2 >  Category : ${meal.strCategory}</p>
            <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                Details
                </button>

            </div>
            </div>
        `
        melasContainerr.appendChild(mealDiv);
    });

}
const searchMeal = () =>{
   const serchText =document.getElementById('search-field').value;
   loadMeals(serchText)
//    console.log(serchText)

}

const loadMealDetails = idmeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`
    fetch(url)
    .then(res => res.json())
    .then(data=> displayMealDetails(data.meals[0]))
    console.log(idmeal)
}

const displayMealDetails = meal =>{
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealDetails = document.getElementById('mealdetailsBody');
    mealDetails.innerHTML=`
    <img class = img-fluid src="${meal.strMealThumb}">

    <p class= mt-5 >  Area : ${meal.strArea}</p>
    <p class= mt-2 >  Category : ${meal.strCategory}</p>
    <p class= mt-2 >  Ingredient : ${meal.strIngredient1+' , '+meal.strIngredient2+' , '+meal.strIngredient3+' , '+meal.strIngredient4+' , '+meal.strIngredient5+' , '+meal.strIngredient6+' , '+meal.strIngredient7+' , '+meal.strIngredient8+' , '+meal.strIngredient9+' , '+meal.strIngredient10+' , '+meal.strIngredient11+' , '+meal.strIngredient12+' , '+meal.strIngredient13}</p>
    <a href=" ${meal.strYoutube}"><button  class= "btn btn-info">Watch Video </button></a>
   
    `
}
loadMeals('fish');