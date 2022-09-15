import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom'

export default function Editprofile({ user }) {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState(false);
    const [calories, setCal] = useState(0)

    const setHeightOn = async (e) => {
        setHeight(e.target.value);
    }
    const setWeightOn = async (e) => {
        setWeight(e.target.value);
    }
    const setAgeOn = async (e) => {
        setAge(e.target.value);
        
    }
    const setGenderOn = async (e) => {
        setGender(e.target.value)
    }

    const setCalOn = async (e) => {
        setCal(e.target.value)
    }
    useEffect(() => {
        if (height!==0) {
            if (gender) {
                setCal(weight*6.25+12.7*height-(6.8*age)+55);
            }
        else {
            setCal(weight*4.35+4.7*height-(4.7*age)+655);
        }
        }
    })


    const updateProfile = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:5000/api/editprofile`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${user.token}`
            },
            body: JSON.stringify({
              height: e.target.height.value,
              weight: e.target.weight.value,
              age: e.target.age.value,
              gender: e.target.gender.value,
              calories: e.target.cal.value,

            })
        });
        const data = await res.json();
        console.log(data)
    }


    return (
        <form onSubmit={(e)=>{updateProfile(e)}} >
        <div className = "calculator"  >
            <h1>Calorie Calculator</h1>
            Height <br/><input onChange={setHeightOn} placeholder="Height in Inches"></input><br/>
            Weight <br/><input onChange={setWeightOn} placeholder="Weight in Inches"></input><br/>
            Age <br/><input onChange={setAgeOn} placeholder="Age in Years"></input><br/>
            Please fill if Male <br/><input type ="radio" onChange={setGenderOn}></input><br/>
            <h1>Your BMR is = {calories} </h1>
            <h6>This is how many calories you need to maintain your current weight!</h6>
            <button type ="submit" className="btn btn-primary">Update Profile</button>
        </div>
        </form>
    )
}
