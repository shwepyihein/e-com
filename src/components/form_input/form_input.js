import React from 'react';
import './form_input.scss';


const FromInput=({handlechange,label,...otherProps})=>{
    
    return(
        <div className="group">
            <input className="form-input" onChange={handlechange} {...otherProps} />
            {
                label?
                <label className={`${otherProps.value.length ? 'shrink':''} form-input-label`}>
                    {label}
                </label>:null
            }
        </div>
        
    )
}

export default FromInput