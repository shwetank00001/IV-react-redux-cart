import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {

  const dispatch = useDispatch()
  const products = useSelector((state)=> state.cart)

  function handleRemove(id){
    dispatch(remove(id))
  }

  const ele = products.map(function(item){
    return(
      <div key={item.id}>
      <h2>{item.title}</h2>
      <h2>{item.price}</h2>
      <img src={item.image} />

      <button onClick={() => handleRemove(item.id)}>Remove</button>
    </div>
    )
  })
  return (
    <div>{ele}</div>
  )
}

export default Cart