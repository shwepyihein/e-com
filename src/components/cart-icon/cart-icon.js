
import React from 'react'
import {connect}  from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping.svg'
import './cart-icon.scss'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import CartItem from '../cart-item/cart-item'
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from "reselect";

const CartIcon=({toggleCartHidden,itemCount})=>{
    return(
        <div className="cart-cartItemsCounticon" onClick={toggleCartHidden}>
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

const mapStateToProps =createStructuredSelector({
    itemCount:selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)