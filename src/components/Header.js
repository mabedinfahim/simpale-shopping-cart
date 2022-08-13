import React from 'react';

const Header = ({countCartItems}) => {
    return (
        <div className="row center block">
            <div>
                <a href="#/">
                    <h1>Simple-react-cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">Cart
                {countCartItems? <button className='bage'>{countCartItems}</button>:""}
                </a>   <a href="#/signin">Sign in</a>
            </div>
        </div>
    );
};

export default Header;