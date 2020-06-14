import React from 'react';
import { connect } from "react-redux";
import { selectCollection } from "../../redux//shop/shop.selector";
import './collection.scss'
import CollectionItem from "../../components/collection_item/Collection_item";

const CollectionPage =({collection})=>{
    const { title, items} =collection;
    return(
        <div className="collection-page">
            <h1 className="title">{title}</h1>
            <div className="items">
                {items.map(item=>(
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}
const mapStateToProps =(state,ownProps)=>({
    collection :selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)