import React from "react"
import { Link } from "gatsby"
import { loadStripe } from '@stripe/stripe-js';
import injectSheet from 'react-jss';
import PageLayout from './PageLayout'
import {
  headerFontName,
  bodyFontName,
  panelBgColor,
  linkColor,
} from './constants';

const stripePromise = loadStripe('pk_test_51IF7JME2xIv2JZiGS0bqQAFngU8y9lHwu0rZbb61OawS1uavaU97o1iFBoAhfUf1ej78ocOQ9YFLo0OPA2JdkUBP00Mh0hdI8E');

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


const DonateButton_notConnected = ({classes,amount,stripeId}) => {
  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: stripeId, // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: 'https://example.com/success',
      cancelUrl: 'https://example.com/cancel',
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <button
      role="link"
      className={classes.donateButton}
      onClick={handleClick}
    >
      {`$${amount.toLocaleString()}`}
    </button>
  );
};
const DonateButton =injectSheet(styles)(DonateButton_notConnected);

const DonateScreen = ({classes}) => {


  return (
    <PageLayout>
      <div className={classes.container}>
        <h2 className={classes.h2}>Donate to New Leaf Restoration</h2>
        <div className={classes.columns}>
          {
            [
              [
                {
                  amount: 10,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 20,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 30,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 40,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 50,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 60,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 70,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 80,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 90,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
              ],
              [
                {
                  amount: 100,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 200,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 300,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 400,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 500,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 600,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 700,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 800,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 900,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
              ],
              [
                {
                  amount: 1000,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 2000,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 3000,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 4000,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 5000,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 6000,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 7000,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 8000,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
                {
                  amount: 9000,
                  stripeId: 'price_1IF7KFE2xIv2JZiG6LzrSRFy',
                },
              ],
            ].map((column) => {
              console.log('column',column)
              return (
                <div className={classes.column}>
                  {
                    column.map(({amount,stripeId}) => {
                      return (
                        <DonateButton
                          amount={amount}
                          stripeId={stripeId}
                        />
                      );
                    })
                  }
                </div>
              );
            })
          }
        </div>
        <a href="/" className={classes.homepageLink}>Go back to the homepage</a>
      </div>
    </PageLayout>
  );
};

export default injectSheet(styles)(DonateScreen);
