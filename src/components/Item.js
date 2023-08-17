import React from 'react'

import { useDispatch } from 'react-redux'

import { add } from '../store/cartSlice'

const Item = () => {

  const [ prod , setProd] = React.useState([])
  const dispatch = useDispatch()

  async function getProd(){
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    setProd(data)
    console.log(data)
  }

  React.useEffect( () => {
    getProd()
  }, [])


  function handleAdd(item){
    dispatch(add(item))
  }

  const ele = prod.map(function(item){
    return(
      <div key={item.id}>
        <h2>{item.title}</h2>
        <h2>{item.price}</h2>
        <img src={item.image}/>

        <button onClick={() => handleAdd(item)}>Add to cart</button>
      </div>
    )
  })



  return (
    <div>
      {ele}
    </div>
  )
}

export default Item