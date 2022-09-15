import React, { useState, useEffect } from 'react'
import Home from './views/Home'
import Nav from './components/Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Form from './views/Form'
import './App.css'
import Login from './views/Login'
import Editprofile from './views/Editprofile'
import Food from './views/Addfood'
import Foodsearch from './components/Foodsearch'
import News from './views/News'
import Fooddisplay from './views/Fooddisplay'
import Addfood from './views/Addfood'
import Caloriesapp from './views/Caloriesapp'


export default function App() {
  const getUserFromLocalStorage = () => {
    const foundUser = localStorage.getItem('user')
    if (foundUser){
      return JSON.parse(foundUser)
    }
    return {}
  };


  const [user, setUser] = useState(getUserFromLocalStorage())

  const logMeIn = (user) => {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  const logMeOut = () => {
    setUser({})
    localStorage.removeItem('user')
  }
  return (
    <BrowserRouter>
        
      <Nav user = {user} logMeOut={logMeOut}/>
      <div className = "App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/login' element={<Login logMeIn={logMeIn} />} />
          <Route path='/editprofile' element={<Editprofile user={user} />} />
          <Route path='/fooddisplay' element={<Fooddisplay />}/>
          <Route path='/foodsearch' element={<Foodsearch />}/>
          <Route path='/news' element={<News />}/>
          <Route path='/addfood' element={<Addfood />} />
          <Route path='/caloriesapp' element={<Caloriesapp />} />
        </Routes>




      </div >
    </BrowserRouter>
  )
}
