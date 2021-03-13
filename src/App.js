import React from 'react'
import './App.css';
import Counter from './components/Counter'

class App extends React.Component {
constructor(props){
    super(props)
    this.state={
      name: 'state1'
    }
  }

  // componentDidMount(){
  //   this.setState({
  //     name: 'state1',
  //     isOn: true
  //   })
  // }

  handleButton = ( ) =>{
    this.setState({
      isOn: !this.state.isOn
    } )

  }
  

render(){
  const {isOn, name} = this.state
  return (
      <>
        <div></div>
        <Counter />
      </>
  );
}
}



export default App;
