import React, { Component } from 'react';

class CounterTitleClass extends Component {
    state = { 
       count: 0,
       name: '',
       x: 0,
       y: 0
     } 
    render() { 
        return (
            <div className="container m-5">
                <h3>X - {this.state.x} , Y - {this.state.y}</h3>
                <div className='formGroup'>
                    <label htmlFor='name' className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" onChange={(e)=>this.setState({...this.state, name: e.target.value})}></input>
                 </div>
                <button className="btn btn-primary" onClick={()=>this.setState({count: this.state.count+1})}>Clicked {this.state.count} times</button>
            </div>
        );
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`;
        window.addEventListener('mousemove',(e)=>this.setState({...this.state, x: e.clientX, y: e.clientY}))
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count != this.state.count ){
            document.title = `Clicked ${this.state.count} times`;
            console.log("document title updated...")
        }
        
    }

    componentWillUnmount(){
        document.title = `React App`;
    }
}
 
export default CounterTitleClass;