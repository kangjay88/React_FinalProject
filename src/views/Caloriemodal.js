import React from 'react'


const Caloriemodal = ({setOpenModal}) => {
    return (
    <div className = "app_modal">
        <h1>Calories must be bigger than 0 and Meal Name cannot be blank</h1>
        <button className="btn_close_modal" onClick={()=>setOpenModal(false)}>Close</button>
    </div>
  )
}

export default Caloriemodal