import React from 'react';
import './custom-buttom.scss';

const CustomButtom =({children ,isGoogleSignIn, ...otherProps})=>{
    return(
        <button className={`${isGoogleSignIn ? 'google-sign_in' :''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
export default CustomButtom;