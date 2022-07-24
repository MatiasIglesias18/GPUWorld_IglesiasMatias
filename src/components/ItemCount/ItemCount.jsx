import React from 'react'
import { useState } from 'react'
import "./ItemCount.scss"
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>

export const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const Add =()=>{
        setCount(count + 1)
    }

    const Rest =()=>{
        setCount(count - 1)
    }

  return (
    <div id='item-count'>
        <div className='count'>
        <button onClick={Add} disabled={count === stock}>+</button>
        <h1>{count}</h1>
        <button onClick={Rest} disabled={count === initial}>-</button>
        </div>
        
        <button className='add' onClick={()=>onAdd(count)}>Agregar al Carrito</button>
        
    </div>


  )
  
}
