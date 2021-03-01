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

Welcome to the New Leaf Restoration Garden. The following rules are in place so the garden can provide a healthy community atmosphere and function as a pleasant place to garden, enjoy nature, and share knowledge. Your adherence to these rules will help everyone have an enjoyable and productive garden season. All members are required to sign an agreement of rules as well as a liability release waiver and will receive a copy of same.

1. The garden is open dawn to dusk to members only, 7 days a week from the opening date.  Friends and family may enter only when accompanied by a garden member.
1. Members will be issued a combination for the lock on the gate.  Do not share that combination with anyone.  New combinations will be issued in subsequent years. Keep the gate shut when entering and locked when leaving. (WE NEED TO ADDRESS THIS TOPIC (POSSIBLY NOT IN THIS ITERATION OF THE RULES)
1. No smoking.
1. No alcohol or illegal substances.
1. The application of herbicides is prohibited.
1. The use of pesticides will be limited to supplied organic products only.
1. Be respectful of other members’ plots. Always use pathways. Do not step into members’ plots as a shortcut to your own.
1. Do not harvest other gardeners’ fruits or vegetables without their permission.
1. Children must be supervised at all times.  Please refrain from allowing children to run through the garden or damage other members’ plants.
1. Permanent structures are not permitted in plots.
1. Members should be mindful to not shade another’s plot with tall or staked plants such as sunflowers, pole beans, etc.
1. Weedy crops such as fennel, mints, etc., should not be planted.
1. Water and soaker hoses will be set up for each plot will be provided, with timers. Watering cans for watering in seeds and plants at the time of planting will be provided at the communal spigot. No hoses will be allowed.
1. Only composted manure is permitted.
1. Garden plots should be maintained throughout the season. If you are unable to care for your plot, please send a notification to our website so that your plot can be reassigned.
1. Keep your plot weeded.
1. Send a notification to the website if you will be absent for an extended period of time (3 weeks or more). You may arrange with another member to care for your plot while you’re gone.
1. Tools will not be provided. Gardeners are responsible for supplying their own tools.
1. Please do not leave tools, bags, garbage, etc., in or around your plot after you leave. Take all items back home with you at the end of the day.
1. By Thanksgiving, gardeners are responsible for cleaning all plant material from their plots and disposing of this material in the compost pile. The exception to this rule is for members who are planting winter crops.
1. Any theft, vandalism or maintenance problems should be reported immediately to XXXXX.
1. Any gardener failing to abide by these rules will be sent up to of two notices outlining the details of the problem along with a deadline for fixing the problem. If the member does not correct the issue, they risk forfeiture of their plot(s), the loss of future gardening privileges at the community garden as well as forfeiture of any fees paid.
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
    const url = `https://us-central1-newleaf-306116.cloudfunctions.net/stripe-inventory-26?purpose=status&env=${env}`;
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
    const plotPurchase = stripePrices[env].purchase[0];
    return (
      <PageLayout>
        <div className={classes.container}>
          <a href="/" className={classes.homepageLink}>Go back to the homepage</a>
          <h2 className={classes.h2}>Reserve a plot at New Leaf Restoration</h2>
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
                  <p>
                    By checking the box below, you agree to the above rules and regulations and understand that New Leaf Restoration is not responsible for your actions.  You relinquish New Leaf Restoration from any liability, damage, loss or claim that occurs in connection with the use of the garden by you or any of your guests as you are the sole person responsible for your plot.
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
                      amount={'Pay to reserve your plot'}
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
