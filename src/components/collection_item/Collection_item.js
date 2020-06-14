import React from 'react';
import './Collection_item.scss';
import {connect} from 'react-redux'
import CustomButtom from '../custom-buttom/custom-buttom';
import {addItem} from '../../redux/cart/cart.action'


const CollectionItem =({item,addItem})=>{    
    const {name,price,imageUrl}= item;
    return (
                <div className="collection-item"> 
                    <div className="image"
                        style={{
                            backgroundImage:`url(${imageUrl})`
                        }}
                    >                        
                    </div>
                    <div className="collection-footer">
                            <span className='name'>{name}</span>
                            <span className='name'>${price}</span>
                    </div> 
                    <CustomButtom inverted  onClick={()=>addItem(item)}>ADD TO CART</CustomButtom>
                </div>
            )
        }

    const mapDispatchToProps=(dispatch)=>({
        addItem:item=> dispatch(addItem(item))
    });

export default connect(null,mapDispatchToProps)(CollectionItem)