import React from 'react'
import { getArray } from '../helpers/getArray'
import { array } from '../../data/data'
import { useEffect } from 'react'
import { useState } from 'react'
import { ItemList } from './ItemList'
import "./ItemListContainer.scss"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
  
  const [products, setProducts] = useState([])
//Var de estado
  const [loading, setLoading] = useState(true)

  const {categoryId} = useParams()

//Promesa
  useEffect(() => {
    getArray(array)
      .then(res=>{
          categoryId?
            setProducts( res.filter((item)=> item.category == categoryId) )
          :
            setProducts(res)
          })
      .catch(err=>console.log(err))
      .finally(()=>setLoading(false))
  }, [categoryId])

  return (
    <div id='item-list-container'>
      {
        loading?
        <div>Cargando...</div> //poner gif
        :
          <ItemList items={products} />
      }
    </div>
  )
}
