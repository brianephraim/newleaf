import React from "react"
import { Link } from "gatsby"
import { loadStripe } from '@stripe/stripe-js';
import Layout from "../components/layout"
import SEO from "../components/seo"

const stripePromise = loadStripe('pk_test_51IF7JME2xIv2JZiGS0bqQAFngU8y9lHwu0rZbb61OawS1uavaU97o1iFBoAhfUf1ej78ocOQ9YFLo0OPA2JdkUBP00Mh0hdI8E');


const SecondPage = () => {
  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1IF7KFE2xIv2JZiG6LzrSRFy', // Replace with the ID of your price
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
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Donate</p>
      <Link to="/">Go back to the homepage</Link>
      <Link to="/events">Go back to the homepage</Link>
      <button role="link" onClick={handleClick}>
        Checkout
      </button>
    </Layout>
  );
};

export default SecondPage
