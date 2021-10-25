import React from "react"
import { Link } from "gatsby"

// import Image from "../components/image"
import SEO from "./components/seo"
// import {GoogleEarthImage} from "../components/image"
import {Image,Text} from 'react-native';
import Markdown from 'react-markdown';
import copy from './copy';
import Info, {Promo} from './Info';
import Thumbnail from './Thumbnail';
import './reset.css';
import injectSheet from 'react-jss';
import SubscribeForm from './SubscribeForm';
import Affiliates from './Affiliates';
import PageLayout from './PageLayout'
import {
  headerFontName,
  bodyFontName,
  panelBgColor,
  linkColor,
} from './constants';
import EventsList from './EventsList';

const copyX = `
[google](https://www.google.com)
[facebook](https://www.facebook.com)

[]
# h1 Heading 8-)

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

`;

const targetBlank = () => '_blank';
class Page extends React.PureComponent {

  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <Markdown
        linkTarget={targetBlank}
      >{copyX}</Markdown>
    );
  }
}
/*
intro
steering
gardenAspects
eradication
discussionsWithRec
governance
team
outro
*/
const purchaseLink = {
  textDecoration: 'none',
  color: 'white',
  backgroundColor: linkColor,

};
const styles={
  headerLogoWrap: {
    margin:'80px 80px 20px 80px',
    alignSelf:'stretch',
  },
  headerLogo: {
    width:'100%',
    marginBottom:20,
  },
  headerText: {
    marginTop:10,
    fontFamily: 'Sansita One',
    color: '#4E852C',
    marginTop:10,
    textShadow:'0px 1px 5px white',
    fontSize: 30,
    textAlign:'center',
  },
  '@media (max-width: 500px)': {
    headerText: {
      fontSize: 20,
    },
  },
  container: {
    display:'flex',
    flexDirection:'column',
    maxWidth: 1280,
    margin: '0 auto',

  },
  afterHero: {},
  columns: {
    display:'flex',
    flexDirection:'row',
  },
  column: {
    display:'flex',
    flexDirection:'column',
    width:'50%',
  },
  hero: {
    width:'100%',
    marginBottom:30,
  },
  logosWrap: {
    display:'flex',
    flexDirection:'row',
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'space-evenly',
    padding:20,
    flexWrap: 'wrap',
  },
  logoItem: {
    display:'block',
    maxHeight: 152,
  },
  footer: {
    alignSelf:'stretch',
    height:100,
    backgroundColor:panelBgColor,
  },
  hideWhenNarrow: {},
  hideWhenWide: {
    display:'none',
  },
  orderLastWhenNarrow: {},
  '@media (max-width: 725px)': {
    headerLogoWrap: {
      margin:20,
    },
    hideWhenNarrow: {
      display:'none',
    },
    column: {
      width:'auto',
    },
    hideWhenWide: {
      display:'block',
    },
    orderLastWhenNarrow: {
      order:99,
    },
  },
  purchaseLinkWrap: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#404040',
    margin: 20,
    padding:20,
  },
  sharedAPlotText: {
    fontFamily: bodyFontName,
    color: '#fff',
    textAlign: 'center',
    '& strong': {
      fontSize:23,
    },
  },
  purchaseLink: {
    alignSelf: 'center',
    fontFamily: 'Sansita One',
    fontSize: 30,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
    borderColor: '#216939',
    borderWidth: 12,
    borderStyle: 'solid',
    textAlign: 'center',
    lineHeight: '40px',
    ...purchaseLink,

    '&:hover': {
      ...purchaseLink,
      opacity: .9,
    },
    '&:visited': {
      ...purchaseLink
    },
    '&:active': {
      ...purchaseLink
    },
    '&:any-link': {
      ...purchaseLink
    },
  },
  underline: {
    textDecoration:'underline !important',
  },
  donateLinkWrap: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#404040',
    margin: 20,
    padding:20,
  },
  donateText: {
    fontFamily: bodyFontName,
    color: '#fff',
    textAlign: 'center',
    '& strong': {
      fontSize:23,
    },
  },
  donateLink: {
    alignSelf: 'center',
    fontFamily: 'Sansita One',
    fontSize: 18,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    borderColor: '#216939',
    borderWidth: 4,
    borderStyle: 'solid',
    textAlign: 'center',
    lineHeight: '40px',
    ...purchaseLink,

    '&:hover': {
      ...purchaseLink,
      opacity: .9,
    },
    '&:visited': {
      ...purchaseLink
    },
    '&:active': {
      ...purchaseLink
    },
    '&:any-link': {
      ...purchaseLink
    },
  },


};

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function isEven(value) {
    return !(value % 2)
}

const Homepage = ({classes}) => {
  const purchaseStuff = (
    <div className={classes.purchaseLinkWrap}>
      {<a href="/purchase" className={classes.purchaseLink}>Click here to LEASE A GARDEN PLOT for $100</a>}
      <p className={classes.sharedAPlotText}>Plots are limited.  Get one now!</p>
      <p className={classes.sharedAPlotText}>If you and a friend want to split a garden plot for <strong>$50</strong> each, no problem!<br /> Just lease a full plot yourself and get your friend to pay you back for their share of it.  Then email us with the friend's name and contact info at info@newleaf-restoration.org so we can get their agreement to the garden rules.</p>
      <p className={classes.sharedAPlotText}>Garden plots can also be leased at a discount for those with limited financial resources - just email us at info@newleaf-restoration.org.</p>

      {false && <a href="mailto:info@newleaf-restoration.org" targe="_blank" className={classes.purchaseLink}>GARDEN PLOTS ARE AVAILABLE! {'\u00a0'}{'\u00a0'}Email{'\u00a0'}<span className={classes.underline}>info@newleaf-restoration.org</span>{'\u00a0'}to gain access.</a>}
    </div>
  );

  const donateStuff = (
    <div className={classes.donateLinkWrap}>
      {<a href="/donate" className={classes.donateLink}>Donate to New Leaf Restoration (click here to donate)</a>}
      <p className={classes.donateText}>New Leaf Restoration is a 501(c)(3) nonprofit organization</p>
      <p className={classes.donateText}>Donations help support garden maintenance and operations, including irrigation systems and fencing. Donations also help subsidize plots for gardeners with limited financial resources.</p>
      <p className={classes.donateText}>A donation does not lease you a plot in the garden.  {/* If you intend to lease a plot, find the button that says "Click here to LEASE A GARDEN PLOT for $100" above. */}</p>
    </div>
  );

  const picsJsxEven = [];
  const picsJsxOdd = [];
  const picsJsxBoth = [];
  let pI = 0;
  while (pI++ <= (22 -1)) {
    const nextPath = `/images/pic${pad(pI,3)}.jpg` + "?101421=qwer"
    if (isEven(pI)) {
      console.log('a')
      picsJsxEven.push(<Thumbnail
        key={nextPath}
        src={nextPath}
        href={nextPath}
        openInNewTab
      />)
    } else {
      picsJsxOdd.push(<Thumbnail
        key={nextPath}
        src={nextPath}
        href={nextPath}
        openInNewTab
      />)
      console.log('b')
    }
    picsJsxBoth.push(<Thumbnail
      key={nextPath}
      src={nextPath}
      href={nextPath}
      openInNewTab
    />)

  }

  return (
    <PageLayout>

      <div className={[classes.afterHero,classes.hideWhenNarrow].join(' ')}>

        {/* purchaseStuff */}

        <div className={classes.columns}>
          <div className={classes.column}>
            <Info
              copy="intro"
            />
            {donateStuff}
            <Thumbnail
              src="/images/tomatos.jpg"
              href="/images/tomatos.jpg"
              openInNewTab
            />
            <Info copy="vision" />
            <Affiliates />
            <Info copy="gardenAspects" />
            <Thumbnail
              src="/images/flowers1.jpg"
              href="/images/flowers1.jpg"
              openInNewTab
            />
            <Info
              copy="eradication"
            />
            <Thumbnail
              src="/images/veggies2.jpg"
              href="/images/veggies2.jpg"
              openInNewTab
            />
            <Info>
              <SubscribeForm />
            </Info>
            <Info copy="email" className="loud" noUnderline />
            <Thumbnail
              src="/images/flowers2.jpg"
              href="/images/flowers2.jpg"
              openInNewTab
            />
            {picsJsxEven}

          </div>
          <div className={classes.column}>
            <Thumbnail
              headline="Location in Garrison"
              src="/images/gardenLocation.jpg"
              href="/images/gardenLocation.jpg"
              openInNewTab
            />
            <Info copy="mission" />
            <Thumbnail
              src="/images/veggies1.jpg"
              href="/images/veggies1.jpg"
              openInNewTab
            />
            <Info
              copy="council"
            />
            <Thumbnail
              src="/images/group-masked.jpg"
              href="/images/group-unmasked.jpg"
              openInNewTab
            />
            {picsJsxOdd}
          </div>

        </div>
      </div>


      <div className={[classes.afterHero,classes.hideWhenWide].join(' ')}>
        {/* purchaseStuff */}

        <div className={classes.columns}>
          <div className={classes.column}>
            <Info
              copy="intro"
            />
            {donateStuff}
            <Thumbnail
              headline="Location in Garrison"
              src="/images/gardenLocation.jpg"
              href="/images/gardenLocation.jpg"
              openInNewTab
            />
            <Info copy="vision" />
            <Affiliates />
            <Info copy="mission" />
            <Thumbnail
              src="/images/flowers1.jpg"
              href="/images/flowers1.jpg"
              openInNewTab
            />
            <Info copy="gardenAspects" />
            <Thumbnail
              src="/images/flowers2.jpg"
              href="/images/flowers2.jpg"
              openInNewTab
            />
            <Info
              copy="eradication"
            />
            <Thumbnail
              src="/images/veggies1.jpg"
              href="/images/veggies1.jpg"
              openInNewTab
            />
            <Info
              copy="council"
            />
            <Thumbnail
              src="/images/group-masked.jpg"
              href="/images/group-unmasked.jpg"
              openInNewTab
            />
            <Info>
              <SubscribeForm />
            </Info>
            <Info copy="email" className="loud"/>
            <Thumbnail
              src="/images/tomatos.jpg"
              href="/images/tomatos.jpg"
              openInNewTab
            />
            {picsJsxBoth}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default injectSheet(styles)(Homepage)
