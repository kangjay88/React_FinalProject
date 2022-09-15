import React, { Component } from 'react'
import Foodcard from './Foodcard'

export default class Foodsearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
           input:'',
    }
  }
    
    passSearchTerm = async () => {
        const res = await fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${this.state.input}`, {
        method:"GET",
        headers: {
            "x-app-id": '4a39a597', 
            'x-app-key':'63a7f49a642c893d9ab006fe9321e0ea',
            "Content-Type":'application/json' 
        },
      });
      const data = await res.json();

      this.setState({ input: data.input })

      this.showResults(data.common[0]);
    };

    showResults = (food) => {
      let resultDiv = document.getElementById('searchresult');
      resultDiv.innerHTML = `<img src='${food.photo.thumb}' /><ul><li>Name1: ${food.food_name}</li><li>Serving size: ${food.serving_qty} ${food.serving_unit}</li></ul>`;

    };


  render() {
    return (
      <div className = "searchbar">
        <form>
            <h5>Search for your food</h5>
            <input onChange={event => this.setState({ input: event.target.value })}
            type='text' id='search' name='search' placeholder='Enter food to find nutrition information'/>

            <div className='search'>
                <button onClick={(e) => {
                    e.preventDefault();
                    this.passSearchTerm();
                     }} 
                     className='btn btn-primary'>
                        Search
                </button>
            </div>
        </form>
        <div id='searchresult'>
        </div>
      </div>
    )
  }
}
