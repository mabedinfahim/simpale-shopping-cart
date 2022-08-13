import React from 'react';

const Product = ({product,onAdd,onRemove}) => {
    return (
        <div>
            <div className="card">
                <img className='small' src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <div>$ {product.price}</div>
                <div>
                    <button onClick={()=>onAdd(product)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;