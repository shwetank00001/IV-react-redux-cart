import React from 'react'
import Item from '../components/Item'


const Home = () => {
  return (
    <div>
        <h3>Hello, Cart app using fake api</h3>


        <div>
          <h4>Products are: </h4>

          <div>
            <Item />
          </div>
        </div>
    </div>
  )
}

export default Home