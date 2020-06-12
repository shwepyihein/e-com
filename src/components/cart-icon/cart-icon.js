
import React from 'react'
import {connect}  from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping.svg'
import './cart-icon.scss'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import CartItem from '../cart-item/cart-item'

const CartIcon=({toggleCartHidden,itemCount})=>{
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">
                {itemCount}
            </span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>(

    {
        toggleCartHidden:()=>(dispatch(toggleCartHidden()))
    }
)

const mapStateToProps =({cart:{cartItems}})=>({
    itemCount:cartItems.reduce(
        (accumalateQuantity,cartItems)=>accumalateQuantity+cartItems.quantity,
        0
        )
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)