import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MYFITNESS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/caloriesapp">Food</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>

              {this.props.user.username ?
                <>
                  <li className="nav-item">
                    <p className="nav-link">Hello, {this.props.user.username}</p>
                  </li>
                  <li className="nav-item" onClick={this.props.logMeOut}>
                    <Link className="nav-link" to="/login">Log Out</Link>
                  </li>
                  <li className="nav-item" onClick={this.props.logMeOut}>
                    <Link className="nav-link" to="/editprofile">Edit Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/foodsearch">Database</Link>
                  </li>
                </>
                :
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/form">Sign Up</Link>
                  </li>
                  
                </>
              }




              
              
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
