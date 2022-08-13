import React from 'react';

const Product = ({item,product,onAdd,onRemove}) => {
    return (
        <div>
            <div className="card">
                <img className='small' src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <div>$ {product.price}</div>
                <div>
                    {item? (<div><button onclick={()=>onRemove(item)} className="remove"> - </button> <span className="p-1">{item.qty}</span><button onclick={()=>onAdd(item)} className="add"> + </button> </div>): (<button onClick={()=>onAdd(product)}>Add to cart</button>)}
                </div>
            </div>
        </div>
    );
};

export default Product;