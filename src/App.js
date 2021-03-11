import React from 'react'
import './App.css';
import CloseButton from './components/CloseButton'

class App extends React.Component {
constructor(props){
    super(props)
    this.state={
      name: 'state1'
    }
  }

  componentDidMount(){
    this.setState({
      name: 'state1',
      isOn: true
    })
  }

  handleButton = ( ) =>{
    this.setState({
      isOn: !this.state.isOn
    } )

  }
  

render(){
  const {isOn, name} = this.state
  this.handleButton()
  return (
    <div className="main" style={{"color": "red"}}>
      <h1>{ name } </h1>
      {isOn ? <CloseButton handleButton={this.handleButton} name={name}/> : <p>{this.state.name}</p>}
      
  </div>
  );
}
}



export default App;
