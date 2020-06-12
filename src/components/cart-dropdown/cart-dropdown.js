import React from 'react';

import './cart-dropdown.scss';
import { connect } from 'react-redux'
import CustomButtom from '../../components/custom-buttom/custom-buttom';
import CartItem from '../cart-item/cart-item'
const CartDropdown= ({cartItems})=>{
    return(
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)
                }
            </div>
            <CustomButtom> Go To Checkout</CustomButtom>
        </div>
    )
}
const mapStateToProps =({cart:{cartItems}})=>({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown)