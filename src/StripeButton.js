import React from "react"
import { loadStripe } from '@stripe/stripe-js';
import injectSheet from 'react-jss';
import PageLayout from './PageLayout'
import {
  headerFontName,
  bodyFontName,
  panelBgColor,
  linkColor,
} from './constants';

const styles={
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 20px',
  },
  homepageLink: {
    '&:any-link':{
      color: 'red'
    },
    fontFamily: bodyFontName,
    marginBottom: 40,
  },
  h2: {
    fontFamily: headerFontName,
  },
  headerLogoWrap: {
    margin:'80px 80px 20px 80px',
    alignSelf:'stretch',
  },
  donateButton: {
    display: 'block',
    backgroundColor: '#50c878',
    color: 'white',
    border: 'none',
    fontFamily: bodyFontName,
    margin: '7px 15px',
    padding: '7px 0',
    width: 90,
    cursor: 'pointer',
  },
  columns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '0 20px 30px',
    '@media (max-width: 475px)': {
      flexDirection: 'column',
    },
  },
  column: {

  },
};

const stripeKeys= {
  dev: 'pk_test_51IGFQBFFFbyANGwCBN7PvHYLtDINa9dOxICsrJEVMY76kH554JGZDl24e71SLnIpFNunN1VoEqcoIL4OikkqZohC009BnBgaC0',
  prod: 'pk_live_51IGFQBFFFbyANGwCyG68aioVrzep11aBd3D0losTox674UAdp1yTgxnVUUCLNjeSmPyD78HspQiejaa9qZWvUsID00ZIFmxQPe'
};

const stripePromises = {
};

function getStripePromise(env){
  const stripePromise = stripePromises[env] || loadStripe(stripeKeys[env]);
  stripePromises[env] = stripePromise;
  return stripePromise;
}


const DonateButton_notConnected = ({classes,amount,stripeId,active = true,inactiveMessage, className, classNameInactive, prefix = '$'}) => {
  const isDev = window.location.search.includes('env=dev');
  const env = isDev ? 'dev' : 'prod';
  getStripePromise(env);
  const handleClick = async (event) => {
    if (!active){
      if (!inactiveMessage){
        return null;
      }
      return alert(inactiveMessage);
    }
    // When the customer clicks on the button, redirect them to Checkout.
    try {
      const stripe = await getStripePromise(env);
      const urlPrefix = `${window.location.protocol}//${window.location.host}`
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{
          price: stripeId, // Replace with the ID of your price
          quantity: 1,
        }],
        mode: 'payment',
        successUrl: `${urlPrefix}/success`,
        cancelUrl: `${urlPrefix}/cancel`,
      });
      console.log('error',error);
    } catch(e){
      console.log(e.message);
      if (e.message.includes('not available')) {
        alert('Looks like plots are sold out for now.  Try again later or contact us at info@newleaf-restoration.org');
      } else {
        alert(`There was a problem: ${e.message}`);
      }
    }

    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  let classNameToUse = classes.donateButton;
  if (className) {
    classNameToUse = className;
    if (!active){
      classNameToUse = classNameInactive || classNameToUse;
    }
  }

  return (
    <button
      role="link"
      className={classNameToUse}
      onClick={handleClick}
    >
      {`${prefix}${amount.toLocaleString()}`}
    </button>
  );
};
const DonateButton =injectSheet(styles)(DonateButton_notConnected);

export default DonateButton;
