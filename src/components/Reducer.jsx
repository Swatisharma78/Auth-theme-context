import React, { Reducer } from "react"
const reducer = (count, action) => {
switch (action.type){
        case "increment":{
        return count + 1;
        }
        case "decrement":{
        return count - 1;
        }
        default: {
        console.log(action.type)
        return count
        }
    }
}
const Reducer = () => {
    const [count, main] = Reducer(reducer, 0);
  return (<div>
          count:{count}
          <div>
              <button onClick={() => main({ type: "decrement" })}>-</button>
              <button onClick={() => main({ type: "increment" })}>+</button>
          </div>
    </div>
  )
}
export default Reducer