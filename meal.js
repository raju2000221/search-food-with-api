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
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
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
loadMeals('fish');