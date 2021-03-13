import React, {useState, useEffect, useReducer} from 'react';

const initialState = {id: 1, name: "", surname: '', gen: "m"}

const reducer = (state, action) => {
    switch(action.type){
        case 'incrementUserID':
            return {...state, id: state.id + 1};
        case 'setUserName':
            return {...state , name: action.val}
        default:
            return state
    }
}

const Counter = (props) => {
    const [user, dispatch] = useReducer(reducer, initialState)
    return( 
        <>
        <h1>{user.id} </h1>
        <div> Counter is : {user.name}</div>
        <button onClick={()=> dispatch({type: 'incrementUserID'})}> + </button>
        <input onChange={(e)=> dispatch({type: 'setUserName', val: e.target.value})} value={user.name} />
        </>
    )
}

export default Counter