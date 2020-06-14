
import React from 'react';
import MenuItem from '../menu-item/MenuItem'
import { connect } from "react-redux";
import { createStructuredSelector} from 'reselect';
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import './directory.scss'

const Directory =({sections})=>{     
        
        return(
            <div className="directory-menu">
                {sections.map(({id,...othersectionprops})=>{
                    return <MenuItem key={id} {...othersectionprops} />
                })}
            </div>
        )
    }


const mapStateToProps= createStructuredSelector({
  sections:selectDirectorySections
})

export default connect(mapStateToProps) (Directory)