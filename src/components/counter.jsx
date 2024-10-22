import React, { Component } from "react";

class Counter extends Component {
  state = {
    title: "Counter Component",
    imageUrl: "https://picsum.photos/800/200",
    count: 0,
  };

  constructor(){
    super();
    //this.handleIncrement = this.handleIncrement.bind(this);
    //this.handleDecrement = this.handleDecrement.bind(this);
  }
  render() {
    // let classes = "badge m-2 badge-";  
    // classes += this.state.count===0?'warning':'primary';
    return (
      //   <div>
      //     <h2>Counter Component</h2>
      //     <button>Increment</button>
      //   </div>

      <React.Fragment>
        <h2>{this.state.title}</h2>
        <img src={this.state.imageUrl} alt=""></img>
        <div>
          <button className="btn btn-secondary m-2" onClick={this.handleDecrement}>-</button>
          {/* <span className="badge badge-primary m-2">{this.formatCount()}</span> */}
          {/* <span className={classes}>{this.formatCount()}</span> */}
          <span className={this.getBadgeColor()}>{this.formatCount()}</span>
          <button className="btn btn-secondary m-2" onClick={this.handleIncrement}>+</button>
        </div>
      </React.Fragment>
    );
  }

//   handleIncrement(){
//     this.setState({count: this.state.count+1})
//   }

//   handleDecrement(){
//     this.setState({count: this.state.count-1})
//   }

    handleIncrement = ()=>this.setState({count: this.state.count+1})

    handleDecrement = ()=>this.setState({count: this.state.count-1})

  getBadgeColor(){
    let classes = "badge m-2 badge-";  
    classes += this.state.count===0?'warning':'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    // return this.state.count === 0 ? 'Zero' : this.state.count;
    //return count === 0 ? <h4>Zero</h4> : count;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
