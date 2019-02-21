import React, { Component} from "react"
import {hot} from "react-hot-loader"

import "./Cookbook.css"

class Cookbook extends Component{
  render(){
    return(
      <div>
        <h1 className="Cookbook"> Anholt Cookbook</h1>
      </div>
    );
  }
}

export default hot(module)(Cookbook)
