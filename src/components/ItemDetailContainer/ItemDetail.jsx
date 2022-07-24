import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const ItemDetail = ({title, description, price, pictureUrl}) => {
  return (
    <div id='item-detail'>
      <div id='portada'>
            <img src={pictureUrl} alt={title} />
      </div>
      <div id='data'>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h3>${price}</h3>
            <Button variant="primary">Comprar ahora</Button>
      </div>
    </div>
  )
}
