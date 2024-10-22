import React, { Component } from "react";

class ListColors extends Component {
  state = {
    title: "List of Colors",
    allColors: ["RED", "BLUE", "GREEN"],
  };
  render() {
    return (
      <React.Fragment>
        <h2>{this.state.title}</h2>
        <ul className="list-group">
          {/* {this.state.allColors.map((eachColor) => (
            <li className="list-group-item" key={eachColor}>
              {eachColor}
            </li>
          ))} */}
          {this.renderAllColors()}
        </ul>
      </React.Fragment>
    );
  }

  renderAllColors(){
    if(this.state.allColors.length==0) return <h4 className="text-danger">Color List is empty!</h4>
    return this.state.allColors.map((eachColor) => (
        <li className="list-group-item" key={eachColor}>
          {eachColor}
        </li>
      ))
  }
}



export default ListColors;
