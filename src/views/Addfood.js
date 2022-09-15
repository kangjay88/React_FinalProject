import React, { useState, useEffect } from 'react'
import CalorieCounter from './Calories';
import Deletefood from './Deletefood';
import Calorielist from './Calorielist';


export default function Addfood({ addMealsHandler, calories, mealName, setCalories, setMealName })  {
  

  const onAddMealsClick = () => {
    addMealsHandler()
  }


  return (
    <div className = "app_controls">
      <div className = "app_controls_inputs">
        <input type ="text"
        placeholder = "Meal"
        value = {mealName} onChange={(e)=>setMealName(e.target.value)}/>
        <input type = "number"
        placeholder = "Calories"
        value = {calories} onChange={(e)=>setCalories(e.target.value)}
        min={0}
        />
        <button onClick={onAddMealsClick}>Add Meal</button>
      </div>
    </div>
  )
}
