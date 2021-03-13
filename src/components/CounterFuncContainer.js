import React, {useState} from 'react';

const CounterFuncContainer = () => {

//    const [myState, setMyState] = useState({
//         counter: 0,
//         name : "Diana",
//     });

    

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    // const onIncrement = () => {
    //     setMyState({...myState,
    //                 counter : myState.counter +1 });
    // }

    const onIncrement = () => {
        setCounter(counter + 1 );
    }

    const onDecrement = () => {
        setCounter(counter - 1 );
    }


    return (
        <div>
            <input 
                placeholder= {"type name..."}
                value = {name}
                onChange = { event => setName(event.target.value)}
             />
            <div>Counter is {counter} :</div>
            <div>
                <button onClick = {onIncrement}>+</button>
                <button onClick = {onDecrement}>-</button>
            </div>
            <h4>My name in {name}</h4>
        </div>
    )
}

export default CounterFuncContainer