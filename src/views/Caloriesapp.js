import React, { useState, useEffect } from 'react'
import Calories from './Calories';
import Deletefood from './Deletefood';
import Calorielist from './Calorielist';
import Addfood from './Addfood';
import Caloriemodal from './Caloriemodal';
import Caloriefilter from './Caloriefilter';

export default function Caloriesapp() {
    const [meals, setMeals] = useState([]);
    const [mealName, setMealName] = useState("");
    const [calories, setCalories] = useState(0);
    const [openModal, setOpenModal] = useState(false); 
    const [selectedFilter, setSelectedFilter] = useState("");

    const addMealsHandler = () => {
        const oldMeals = [...meals];
        const meal = {
          mealName,
          calories,
          id: Math.floor(Math.random()*1000),
        }
        const newMeals = oldMeals.concat(meal)
        if (calories <= 0 || mealName === ""){
            setOpenModal(true);
          alert("must not be empty!")
        }else{
          setMeals(newMeals)
        }
        
        setMealName("");
        setCalories(0);
      }
    
    const deleteAllMeals = () => {
        setMeals([])
    }

    const deleteMealHandler = (id) => {
        const oldMeals = [...meals];
        const newMeals = oldMeals.filter((meal) => meal.id !== id);
        
        setMeals(newMeals)
    }

    const total = meals.map((meal)=>meal.calories)

    return (
    <div className = "CaloriesApp">
        <Calories />
        { openModal ? <Caloriemodal setOpenModal={setOpenModal}/> : "" } 
        <Addfood 
            addMealsHandler={addMealsHandler}
            mealName = {mealName}
            calories = {calories}
            setMealName = {setMealName}
            setCalories = {setCalories}
        />
        
        <div className = "app_meals_container">
            <Caloriefilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
            <Calorielist meals = {meals} deleteMealHandler={deleteMealHandler} />
            <Deletefood deleteAllMeals = {deleteAllMeals} />
        </div>

    </div>
  )
}
