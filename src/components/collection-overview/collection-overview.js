import React from 'react';
import './collection-overview.scss'

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import {selectCollectionForPreview} from '../../redux/shop/shop.selector'
import CollectionPreview from '../../components/preview-collection/CollectionPreview'

const collectionsOverview = ({collections})=>{
    return(
        <div className="collections-overview">
            {collections.map(({id,...otherCollectionProps})=> <CollectionPreview  key={id} {...otherCollectionProps}/>)}
        </div>
    )
}

const mapStateToProps =createStructuredSelector({
    collections:selectCollectionForPreview
    
})


export default connect(mapStateToProps)(collectionsOverview)