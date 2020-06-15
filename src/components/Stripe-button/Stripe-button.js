import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    
    const priceForStripe =price*100;
    const publishableKey ='pk_test_51GuHl5LamTt9OfUBbJAezwawgm7KOARX9fI7LpqDvZ6IxHh5VY9vGrZ75eIi9yeRVOibcu5Cy1oOoN0FzRYTFyRB00vVgYCwbs'

    const onToken =token=>{
        console.log(token)
        alert('payment Successful')
    }

    return(
       <StripeCheckout 
       label='Pay Now' 
       name="CRWN CLOTHING LTD."
       billingAddress
       shippingAddress
       image='https://svgshare.com/i/CUz.svg'
       description={`Your total is $ ${price}`}
       amount={priceForStripe}
       panelLabel='Pay Now'
       token={onToken}
       stripeKey={publishableKey}
       />
    )
}
export default StripeCheckoutButton