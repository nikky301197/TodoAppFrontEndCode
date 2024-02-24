import { useState } from "react";
import Counter from "./Counter.css";
export default function CounterComponent()
{
    let [count , setCount] = useState(0);

    function incrementCounterFunc (event)
    {
        if (event.target.value == 1)
        {
            setCount(++count)
        }
        else if (event.target.value == 2)
        {
            count = count +2;
            setCount(count);
        }
       else{
        count = count + 5 ;
        setCount(count);
       }
        console.log(event.target.value);
    }

    function decrementCounterFunc(event)
    {
        let value = event.target.value; 
       if (value == -1)
       {
        setCount(--count);
       }
       else if (value == -2 )
       {
        count = count -2;
        setCount(count);
       }
       else {
        count = count -5 ;
        setCount(count);
       }
        console.log(event.target.value)
    }

    return(
        <div className="counter">
            <span className="counterValue">{count}</span>
            <div>
                <div>
                <button className="btn" value={1} onClick={incrementCounterFunc}>+1</button>
            <button className="btn" value = {-1} onClick={decrementCounterFunc}>-1</button>
                </div>
           <div>
           <button className="btn" value={2} onClick={incrementCounterFunc}>+2</button>
            <button className="btn" value={-2} onClick={decrementCounterFunc}>-2</button>
           </div>
           <div>
           <button className="btn" value={5} onClick={incrementCounterFunc}>+5</button>
            <button className="btn" value={-5} onClick={decrementCounterFunc}>-5</button>
           </div>
           
            
            </div>
          
        </div>
    )
}