import React from 'react';
import './CartWidget.css';

import img from './logo.jpg';

const CartWidget = () => {
    return (
         <div className='CartWidget'>
            <img src={img} />

        </div>
    );
};


export default CartWidget;