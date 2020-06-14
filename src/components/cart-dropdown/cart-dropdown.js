import React from 'react';

import './cart-dropdown.scss';
import { connect } from 'react-redux'
import CustomButtom from '../../components/custom-buttom/custom-buttom';
import CartItem from '../cart-item/cart-item'
import {selectCartItems} from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from "../../redux/cart/cart.action";
import {withRouter} from 'react-router-dom';
const CartDropdown= ({cartItems,history,dispatch})=>{
    return(
        <div className='cart-dropdown'>
            <div className="cart-items">
                {   cartItems.length
                    ? cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>):<span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButtom onClick={()=>
               { history.push('/checkout');
                dispatch(toggleCartHidden())
            }}> Go To Checkout</CustomButtom>
        </div>
    )
}
const mapStateToProps =createStructuredSelector({
    cartItems:selectCartItems

});


export default withRouter(connect(mapStateToProps)(CartDropdown))