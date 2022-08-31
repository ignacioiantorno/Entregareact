import React, { useState, useEffect } from "react";
import './ItemCount.css';




const ItemCount = () => {

    const [counter, setCounter] = useState(0);
    const handlerCounterUp = () => {
        setCounter(counter + 1);
        
      };

    return (
         <div className='ItemCount'>
           <h1>Componentes funcionales</h1>
      
      
      <p>{counter}</p>
      <button onClick={handlerCounterUp}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>

        </div>
    );
};


export default ItemCount;