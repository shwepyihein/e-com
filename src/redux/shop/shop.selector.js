import {createSelector} from 'reselect'



const selectshop = state =>state.shop;

export const selectCollections   = createSelector(
    [selectshop],
    shop=>shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections=>Object.keys(collections).map(key=>collections[key])
)

export const selectCollection = collectionUrlPrasm =>
 createSelector(
     [selectCollections],
     collections=> collections[collectionUrlPrasm]
     
 )