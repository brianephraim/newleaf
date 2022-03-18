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
    backgroundColor: '#eee',
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
  checkboxWrap: {},
  checkboxLabel: {
    marginRight: 10,
  },
};

styles.purchaseButtonInactive = {
  ...styles.purchaseButton,
  backgroundColor: '#999',
};


const rulesText = `
## NEW LEAF RESTORATION GARDEN RULES

Welcome to the New Leaf Restoration Garden. Please read carefully the following information and rules, which have been designed to ensure that the garden is a safe, pleasant, and inviting place. Thank you!

1. Plot lease is limited to one per household and members must be Philipstown residents for this initial offering.

1. Garden plots are 10’ x 4.’ Cost for the 2021 season is $100 per plot.

1. The garden is open from dawn to dusk, seven days a week, from date on which the garden opens for the season (TBD) through to Thanksgiving.

1. Water and soaker hoses will be provided and set up for each plot with timers. Watering cans for watering seeds and plants at the time of planting will be provided at the communal spigot.

1. The use of pesticides will be limited to supplied organic products only.

1. Tools will not be provided; gardeners are responsible for supplying their own tools.

1. Please do not leave tools, bags, garbage, etc., in or around your plot when you leave; take all items with you when you leave the garden.

1. Please be respectful of other members’ plots. Always use pathways. Do not step into members’ plots.

1. Members should be mindful to avoid shading other members’ plots with tall or staked plants, i.e., sunflowers, pole beans, etc.

1. Garden plots should be weeded and maintained throughout the season. If you are unable to care for your plot for the entire season, please email a notification to info@newleaf-restoration.org so that your plot can be made available to another member.

1. If you will be unable to tend to your plot for three weeks or more during the season, you may arrange for another member to care for your plot while you are away.

1. Members will be issued a combination for the lock on the main garden entrance gate. This combination must not be shared with anyone. Combinations will be changed annually.

1. Please close the gate after entering the garden and be sure it is locked when you leave the garden.

1. Members should immediately report any theft, vandalism, or maintenance issues to info@newleaf-restoration.org.


The following rules are in place so that our garden is a pleasant place to garden, enjoy nature, and share knowledge—and one which provides a healthy community atmosphere. Your adherence to these rules will help ensure that all gardeners have an enjoyable and productive gardening season.

1. The garden is open to members only, Friends and family may enter only when accompanied by a garden member.
1. Children must be supervised in the garden at all times. Please do not allow children to run through the garden or damage other members’ plants.
1. Pets are not permitted in the garden.
1. No smoking, alcohol, or illegal substances are permitted in the garden.
1. The application of herbicides is prohibited.
1. Weedy plants, i.e., fennel, mints, etc. must not be planted.
1. Only composted manure is permitted.
1. No additional hoses will be allowed.
1. Permanent structures are not permitted in garden plots.
1. Do not harvest other gardeners’ fruits or vegetables without their permission.
1. Gardeners are responsible for removing all plant material from their plots and disposing of it in the compost pile by no later than Thanksgiving. The exception to this expectation is members who are planting winter crops.

Any gardener failing to abide by these rules will be sent up to two notices identifying the nature of the issue(s), along with a date by which the issue(s) should be resolved. If the gardener fails to correct said issue, they risk forfeiture of their plot(s), the loss of future gardening privileges at the community garden, and forfeiture of any fees paid.


`;

class PurchaseScreen extends Component {
  state = {};
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({checked: value});
  };
  checkAvailable = async () => {
    const isDev = window.location.search.includes('env=dev');
    const env = isDev ? 'dev' : 'prod';
    const url = `https://us-central1-newleaf-306116.cloudfunctions.net/stripe-inventory-27?purpose=status&env=${env}`;
    try {
      const data = await fetch(url,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({zxcv:1234})
      })
      .then(r => r.json());
      const {current, max} = data;
      if (current >= max) {
        this.setState({
          checkAvailableError: 'Sorry, there are not more plots available at this time.  Please, try again later. Email us at info@newleaf-restoration.org is you have any questions.'
        });
      } else {
        this.setState({
          showPage: true,
        });
      }
    } catch(e){
      this.setState({
        checkAvailableError: [
          e.message || 'Something went wrong.',
          'Email us at info@newleaf-restoration.org is this problem persists.'
        ].join(' ')
      })
    }



  };
  componentDidMount(){
    this.checkAvailable();
  }
  render(){
    const {classes} = this.props;
    const isDev = window.location.search.includes('env=dev');
    const env = isDev ? 'dev' : 'prod';
    console.log('stripePrices[env]',stripePrices[env]);
    const plotPurchase = stripePrices[env].purchase[0];
    // return (
    //   <PageLayout>
    //     <div className={classes.container}>
    //       <p>
    //         In order to access a plot, please email info@newleaf-restoration.org.
    //       </p>
    //       <a href="/" className={classes.homepageLink}>Go back to the homepage</a>
    //     </div>
    //   </PageLayout>
    // );
    return (
      <PageLayout>
        <div className={classes.container}>
          <a href="/" className={classes.homepageLink}>Go back to the homepage</a>
          <h2 className={classes.h2}>Lease a plot at New Leaf Restoration</h2>
          {
            !this.state.showPage && !this.state.checkAvailableError && (
              <p> loading...</p>
            )
          }
          {!!this.state.checkAvailableError && (
            <p>{this.state.checkAvailableError}</p>
          )}

          {
            !!this.state.showPage && (
              <div className={classes.body}>
                <Markdown
                  // linkTarget={targetBlank}
                  showAll
                >{rulesText}</Markdown>
                <div className={classes.checkboxSection}>
                  {/* <p>The leasing period has ended.  Please try again in 2023.</p> */}
                  <p>
                    By checking the box below and completing the purchase, you agree to the above rules and regulations and understand that New Leaf Restoration, Inc. is not responsible for your actions. You hereby relinquish New Leaf Restoration, Inc. from any liability, damage, loss, or claim that occurs in connection with the use of the garden by me or any of my guests, as you are solely responsible for your plot.
                  </p>
                  <div className={classes.checkboxArea}>
                    <div className={classes.checkboxWrap}>
                      <label className={classes.checkboxLabel} htmlFor="confirmCheckbox">Click this checkbox to confirm</label>
                      <input
                        type="checkbox"
                        id="confirmCheckbox"
                        onChange={this.handleInputChange} />
                    </div>
                    <StripeButton
                      prefix={''}
                      amount={'Pay to lease your plot'}
                      stripeId={plotPurchase[1]}
                      active={!!this.state.checked}
                      inactiveMessage={'Click the checkbox to agree to the rules.'}
                      className={classes.purchaseButton}
                      classNameInactive={classes.purchaseButtonInactive}
                    />
                  </div>
                </div>

              </div>
            )
          }
          <a href="/" className={classes.homepageLink}>Go back to the homepage</a>
        </div>
      </PageLayout>
    );
  }
}

const PurchaseScreenPrepared = injectSheet(styles)(PurchaseScreen);

class PurchaseScreenWrapped extends Component {
  state = {};
  componentDidMount(){
    this.setState({
      ready: true,
    });
  }
  render(){
    return this.state.ready ? <PurchaseScreenPrepared /> : null;
  }
}

export default PurchaseScreenWrapped;
