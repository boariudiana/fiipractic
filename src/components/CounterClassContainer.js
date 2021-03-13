import React, {Component,} from "react";

const Today = (props) =>{
  const date = new Date ();
  return (
    <>
        <div> {date.toDateString()}</div>
        <h3> Counter is : {props.counter}</h3>
        <div>{props.myName}</div>
    </>
  )
 
}

class CounterClassCounter extends Component {
    state =
    {
        counter: 0,
        name : "Diana",
    }

    onIncrement =()=>{
        this.setState({counter : this.state.counter + 1})
    }

    onDecrement =()=>{
        this.setState({counter : this.state.counter - 1})
    }

    render() {
        return (
            <div>
                <div className = {this.state.counter < 0 ? "red" : "green"}>Counter is : {this.state.counter}</div>
                <div>
                    <button onClick = {this.onIncrement}>+</button>
                    <button onClick = {this.onDecrement}>-</button>
                </div>
                <Today counter = {this.state.counter}
                 myName = {this.state.name}/>
            </div>
        )
    }
}

export default CounterClassCounter