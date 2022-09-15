import React from 'react'

export default function Deletefood ({deleteAllMeals}) {
  return (
    <div className = "app_control_delete">
        <button className ="btn_delete_all" onClick={()=>{deleteAllMeals()}}> 
        Delete Food
        </button>
    </div>
  )
}
