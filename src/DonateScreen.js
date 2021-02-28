import React, {Component} from "react"
import { Link } from "gatsby"
import { loadStripe } from '@stripe/stripe-js';
import Markdown from 'react-markdown';
import injectSheet from 'react-jss';
import PageLayout from './PageLayout'
import {
  headerFontName,
  bodyFontName,
  panelBgColor,
  linkColor,
} from './constants';
import stripePrices from './stripePrices';
import StripeButton from './StripeButton';


console.log('stripePrices',stripePrices);



function splitPricesIntoColumnArrays(originalArray){
  const tens = originalArray.filter(([amt]) => amt < 100);
  const hundreds = originalArray.filter(([amt]) => amt > 99 && amt < 1000);
  const thousands = originalArray.filter(([amt]) => amt > 999);
  return [tens,hundreds,thousands];
}


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
  body: {
    maxWidth: 800,
    margin: '0 30px',
  },
  checkboxSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ccc',
    padding: 20,
  },
  checkboxArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#aaa',
    padding: 20,
  },
  purchaseButton: {
    display: 'block',
    backgroundColor: '#009933',
    color: 'white',
    border: 'none',
    fontFamily: bodyFontName,
    margin: '7px 15px',
    padding: '7px 20px',
    // width: 90,
    cursor: 'pointer',
  },
};

styles.purchaseButtonInactive = {
  ...styles.purchaseButton,
  backgroundColor: '#999',
};



class PurchaseScreen extends Component {
  state = {};
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({checked: value});
  };
  render(){
    const {classes} = this.props;
    const isDev = window.location.search.includes('env=dev');
    const env = isDev ? 'dev' : 'prod';
    const plotPurchase = stripePrices[env].purchase[0];
    const pricesAsColumns = splitPricesIntoColumnArrays(stripePrices[env].donate);
    return (
      <PageLayout>
        <div className={classes.container}>
          <h2 className={classes.h2}>Donate to New Leaf Restoration</h2>
          <div className={classes.columns}>
            {
              pricesAsColumns.map((column,index) => {
                console.log('column',column)
                return (
                  <div className={classes.column} key={index}>
                    {
                      column.map(([amount,stripeId]) => {
                        return (
                          <StripeButton
                            key={stripeId}
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
  }
}

export default injectSheet(styles)(PurchaseScreen);
