import React from "react";
import Homepage from "./components/Homepage";
import {windowScroll, getRandomMeal} from "./utility"
import { nanoid } from "nanoid";

export default function App(){
  /*
    meals: stores the list of dishes fetched from API
    click: keep track of add button event, to trigger async fetch

  */
  const [meals, setMeals] = React.useState(()=>JSON.parse(localStorage.getItem("meals")) || []);
  const [click, setClick] = React.useState(false);
  // React.useEffect(() => {
  //   /*
  //     Fetching meals first time on reload
  //   */
  //   async function getMeals() {
  //     const mealCount = 10;
  //     for (let i = 0; i < mealCount; i++) {
  //       let meal = await getRandomMeal();
  //       meal = {...meal,id:nanoid()}
  //       setMeals((old) => [...old, meal]);
  //     }
  //   }    
  //     //if none of the meals are fetched before
  //     getMeals();
      
  // }, []);

  // using local storage for caching
  React.useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  //async fetch for a new meal based on click event
  React.useEffect((e) => {
    
    async function addNewMeal() {
      let meal = await getRandomMeal();
      meal = {...meal,id:nanoid()}      
      setMeals((old) => [meal, ...old]);      
    }
    addNewMeal();
  }, [click]);

  //handler when add meal button is clicked
  function handleAddMeal() {
    setClick(!click);
    windowScroll();
  }
  //handler when delete meal button is clicked
  function handleDeleteMeal(mealId) {   

    setMeals(meals.filter((meal) => meal.id !== mealId));
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

