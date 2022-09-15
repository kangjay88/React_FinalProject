

import React, { Component } from 'react'
import Foodsearch from '../components/Foodsearch'
import Foodcard from '../components/Foodcard';

export default class Fooddisplay extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        nutritionixResults: {},
    }
}

    // passSearchTerm = async () => {
    //     const res = await fetch(`https://trackapi.nutritionix.com/v2/search/instant`, {
    //     method:"GET",
    //     headers: {
    //         "x-app-id": '4a39a597', 
    //         'x-app-key':'63a7f49a642c893d9ab006fe9321e0ea',
    //         "Content-Type":'application/json' 
    //     },
    // });
    // const data = await res.json();
    // const access_token=data['access_token']
    // return access_token
    // };

    render() {
        return (
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <Foodsearch.Foodsearch updateResults={(data) => {
                this.setState({nutritionixResults: data})
                }}/>
            </input>
            <div className='card'>
                <div>
                    <Foodcard nutritionixresults={this.state.nutritionixResults}/>
                </div>
            </div>
            
        </form>
        
    )
  }
}
