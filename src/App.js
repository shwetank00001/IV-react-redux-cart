import React from 'react';
import Home from './Pages/Home';
import Cart from './Pages/Cart'

import Nav from './components/Nav'


import { Provider } from 'react-redux';
import store from './store/store'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
