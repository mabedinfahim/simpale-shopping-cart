import React from 'react';
import Product from './Product';

const Main = ({products,onAdd,onRemove}) => {
    return (
        <div className="block col-2">
            <h3>Products</h3>
            <div className="row">
            {products.map((product)=>(
                <Product onAdd={onAdd} onRemove={onRemove} key={product.id} product={product}></Product>
            ))}
            </div>
        </div>
    );
};

export default Main;