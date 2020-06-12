import React from 'react';
import './custom-buttom.scss';

const CustomButtom =({children ,isGoogleSignIn,inverted, ...otherProps})=>{
    return(
        <button className={`${inverted? 'inverted': ''}${isGoogleSignIn ? 'google-sign_in' :''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
export default CustomButtom;