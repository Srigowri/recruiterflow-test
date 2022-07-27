import React from "react";
import Confetti from 'react-confetti';
import {windowScroll} from "../utility"

export default function Homepage(props){

    //wrap the meals inside list element
    //meal id contains the unique meal id
    const element = props.meals.map(meal => (
    <div key={meal.id}>        
        <li className="recipes">   
          <img src={meal.strMealThumb} alt={meal.strMeal}/>              
          <span>{meal.strMeal}</span>
          <button className="delmeal-btn" onClick={()=>props.handleDeleteMeal(meal.id)}>X</button>
        </li>
    </div>
));

return (<div className="homepage">
        <Confetti width="40px" height="40px" />
        <button className="addmeal-btn" onClick={props.handleAddMeal}> Add+</button>      
        <ul className="recipes-ul" id="recipes-ul">
          {element}
        </ul>   
        <button className="scroll-up" onClick={()=>windowScroll()}>Up</button> 
        </div>)
  
}
