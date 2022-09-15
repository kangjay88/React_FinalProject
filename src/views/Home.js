import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {'test': 'value'}
    console.log('constructed the HOME component')
  }


  componentDidMount() {
    console.log('mounted the HOME component')

  }

  render() {
    console.log('rendered the HOME component')


    return (
      <> 
        <div className="container text-center">
            <div className="row align-items-center">
                <div className="col-4">
                    <h1>Good Health Starts with what you eat.</h1><Link type = "button" to ="/form" className="btn btn-primary btn-lg">Get Started Today!</Link>
                </div>
                <div className = "col-4">
                    <img src={"https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail.jpg"} class="rounded" alt="..."/>
                </div>
            </div>
        </div>
      </>
    )
  }
}