import React, { Component } from 'react';


export default class Foodcard extends Component {
    constructor() {
        super();
        this.state={
            
        }
    }
    render () {
        const a = this.props.nutritionixresults
        return (
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{a.food_name}</h5>
                    <a href={a.url} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>


        )
    }
}

