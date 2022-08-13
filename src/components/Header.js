import React from 'react';

const Header = ({cartItems}) => {
    return (
        <div className="row center block">
            <div>
                <a href="#/">
                    <h1>Simple-react-cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">Cart
                {cartItems.length? <button className="bage">{cartItems.length}</button>:""}
                </a>   <a href="#/signin">Sign in</a>
            </div>
        </div>
    );
};

export default Header;