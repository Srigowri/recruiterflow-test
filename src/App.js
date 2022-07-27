import React from "react";
export default function App(){
  /*
    meals: stores the list of dishes fetched from API
    click: keep track of add button event, to trigger async fetch

  */
  const [meals, setMeals] = React.useState([]);
  const [click, setClick] = React.useState(false);
  const mealCount = 10;  

  React.useEffect(() => {
    /*
      Fetching meals first time on reload
    */
    async function getMeals() {
      for (let i = 0; i < mealCount; i++) {
        let meal = await getRandomMeal();
        setMeals((old) => [...old, meal]);
      }
    }
    if(!meals){
      //if none of the meals are fetched before
      getMeals();
    }      
  }, []);

  // using local storage for caching
  React.useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  //async fetch for a new meal based on click event
  React.useEffect(() => {
    async function addNewMeal() {
      let meal = await getRandomMeal();
      setMeals((old) => [meal, ...old]);      
    }
    addNewMeal();
  }, [click]);

  
  function windowScroll(){
    // the newly added dish is the first dish, so moving to the top of the page
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  //handler when add meal button is clicked
  function handleAddMeal() {
    setClick(!click);
    windowScroll();
  }
  //handler when delete meal button is clicked
  function handleDeleteMeal(mealId) {    
    setMeals(meals.filter((meal) => meal.idMeal !== mealId));
  }
  //the app controls the props sent to child -> Homepage
  return (
    <main>
      <Homepage
        meals={meals}
        handleAddMeal={handleAddMeal}
        handleDeleteMeal={handleDeleteMeal}
      />
    </main>
  );
};

