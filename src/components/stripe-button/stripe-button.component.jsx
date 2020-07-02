import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H0S5yIKXPBGhClIJ5yWvuQ6r30IJ56xyEcT34FyDZvEzZKmkIBuTtebRRgBcnEqIdyv5f19dThCNmSwY1ezfQ0E000hX7kRhr';

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is ₱${ price }`}
            amount={ priceForStripe }
            panelLabel='Pay Now'
            token={ onToken }
            currency="PHP"
            locale="ph"
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
