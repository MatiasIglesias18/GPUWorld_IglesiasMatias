import React from 'react'
import { Item } from './Item'

export const ItemList = ({items}) => {
  return (
    <>
      { //Separa los items del array de objetos Item
        items.map((item)=>(<Item key={item.id} {...item} />))
    }
    </>
  )
}
