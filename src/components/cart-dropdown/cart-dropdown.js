import React from 'react';

import './cart-dropdown.scss';
import CustomButtom from '../../components/custom-buttom/custom-buttom';

const CartDropdown= ()=>{
    return(
        <div className='cart-dropdown'>
            <div className="cart-items">
                
            </div>
            <CustomButtom> Go To Checkout</CustomButtom>
        </div>
    )
}

export default CartDropdown