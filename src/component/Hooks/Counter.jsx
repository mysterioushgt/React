import React, { useReducer } from 'react'

const reducer = (state, action) => {  //current state action  method 
    
    console.log(state, action);
   
  
    switch (action.type) {
      case "INCREMENT":
        //return { count: state.count + 1 };
        return state+1;
      case "DECREMENT":
        //return { count: state.count - 1 };
        return state-1;
  
      default:
        return state;
    }
};

function Counter() {

    const initialState = 0

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>Count1:{state}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                INCREMENT Count
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                DECREMENT Count
            </button>

        </div>
    )
}

export default Counter