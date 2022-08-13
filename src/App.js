import React, { useState } from 'react';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import data from './data'

function App() {
  const [cartItems,setCartItems]=useState([])
  const onAdd=(product)=>{
    const exist=cartItems.find(x=>x.id===product.id)
    if(exist){
      const newCartItems=cartItems.map(x=>x.id===product.id ? {...exist,qty:exist.qty+1} : x)
      setCartItems(newCartItems)
    }
  }
  const onRmove=()=>{

  }
  const {products}=data;
  return (
    <div>
      <Header cartItems={cartItems}/>
      <div className="row">
          <Main
          onAdd={onAdd}
          onRmove={onRmove}
          products={products}/>
          <Basket/>
      </div>
    </div>
  );
}

export default App;
