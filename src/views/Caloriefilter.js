import React from 'react'

export default function Caloriefilter({setSelectedFilter,selectedFilter}) {
  return (
    <div className='app_meals_container_select'>
        <select defaultValue = {selectedFilter}
                onChange={(e)=>setSelectedFilter(e.target.value)}>
            <option value = ""></option>
            <option value = "Ascending"></option> 
            <option value = "Descending"></option>   
        </select>
    </div>
  )
}
