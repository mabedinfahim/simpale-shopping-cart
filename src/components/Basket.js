import React from 'react';

const Basket = ({cartItems,onAdd,onRemove}) => {
    const itemsPrice=cartItems.reduce((a,c)=>a+c.qty*c.price,0)
    const texPrice=itemsPrice*0.14;
    const shippingPrice=itemsPrice>2000? 0:20;
    const totalPrice=itemsPrice+texPrice+shippingPrice;
    return (
        <aside className="block col-1">
           <h2>Cart Items</h2>
           {cartItems.length===0 && <div>Cart is empty</div>}
           {cartItems.map((item)=>(
            <div key={item.id} className="row center">
                <div className="col-1">{item.name}</div>
                <div className="col-1">
                    <button onclick={()=>onRemove(item)} className="remove"> - </button>
                    <button onclick={()=>onAdd(item)} className="add"> + </button>
                </div>
                <div className="col-1 text-right">{item.qty} X {itemsPrice.toFixed(2)}</div>
            </div>
           ))}
           {cartItems.length!==0 && (
            <>
                <hr />
                <div className="row">
                   <div className="col-2">Item Price</div>
                   <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                   <div className="col-2">Tex Price</div>
                   <div className="col-1 text-right">${texPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                   <div className="col-2">Shipping Price</div>
                   <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                   <div className="col-2">Total Price</div>
                   <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
                </div>
                <hr />
                <button onClick={()=>alert("checkout implement")}>Check out</button>
            </>
           )}
        </aside>
    );
};

export default Basket;