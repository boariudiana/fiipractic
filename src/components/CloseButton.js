import React from 'react'

 const CloseButton = (props) => {
    return (
        <div>
        <button onClick={() => props.handleButton()}> 
             {props.name}
             </button>
        </div>
    )
}

// class CloseButton extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             value: 'Text button'
//         }
//     }

//     changeName(){
//         this.setState({
//             value: "text 2"
//         })
//     }

//     componentWillUnmount(){
//         console.log('unmount')
//       }

//     render(){
//         return(
//             <button onClick={() => this.props.handleButton()}> 
//             {this.state.value}
//             </button>
//         )
//     }

// }



export default CloseButton