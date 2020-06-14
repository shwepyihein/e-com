
import React from 'react';
import './preview_collection.scss';
import CollectionItem from '../collection_item/Collection_item'


const CollectionPreview =({title,items})=>{        
return (   <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
             {
                 items.filter((item,index)=>index<4).map((item)=>{

                     return <CollectionItem key={item.id} item={item}/>
                 })
             }
        </div>
    </div>
)
}

export default CollectionPreview