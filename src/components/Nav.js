import React from 'react'
import { useSelector } from 'react-redux'


import { Link } from 'react-router-dom'


const Nav = () => {

  const item = useSelector( (state) => state.cart)

  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/cart'}>Cart</Link>

      <h4>Cart: {item.length}</h4>
    </div>
  )
}

export default Nav