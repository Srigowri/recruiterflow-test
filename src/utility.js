//utility function to fetch randommeal
const getRandomMeal = async()=>{
    const response =  await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const meal = await response.json();   
    const mealData = meal.meals[0]; 
    console.log("new meal")    
    return mealData;
  }
  //utility function to scroll up
const windowScroll = ()=>{
    // the newly added dish is the first dish, so moving to the top of the page
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

export {getRandomMeal, windowScroll};