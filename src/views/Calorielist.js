import React from 'react'

export default function Calorielist({ meals, deleteMealHandler }) {



  return (
    <div className="app_meals_container_wrapper">
        {meals.map((meal,index) => (
            <div key = {index} className = "app_meals_container_wrapper_inner">
                <div>{`${meal.mealName} : ${meal.calories}`}</div>
                <div>
                    <button className="btn_delete_meal" onCLick={() => deleteMealHandler(meal.id)}> Delete </button>
                </div>
            </div>
        ))}
    </div>
  )
}
