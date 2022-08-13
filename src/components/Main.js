import React from 'react';
import Product from './Product';

const Main = ({cartItems,products,onAdd,onRemove}) => {
    return (
        <div className="block col-2">
            <h3>Products</h3>
            <div className="row">
            {products.map((product)=>(
                <Product item={cartItems.find((x)=>x.id === product.id)} onAdd={onAdd} onRemove={onRemove} key={product.id} product={product}></Product>
            ))}
            </div>
        </div>
    );
};

export default Main;