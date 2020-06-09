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
import {
  headerFontName,
  bodyFontName,
  panelBgColor,
  linkColor,
} from './constants';


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
  },
  logosWrap: {
    display:'flex',
    flexDirection:'row',
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'space-evenly',
    padding:20,
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

};

const Homepage = ({classes}) => (
  <div className={classes.container}>
    <SEO />
    <div className={classes.headerLogoWrap}>
      <img src={'/images/headerlogo.png'} className={classes.headerLogo} />
      <p className={classes.headerText}>New Community Gardens</p>
      <p className={classes.headerText}>Town of Philipstown</p>
    </div>
    <Promo />
    <img src={'/images/widePhoto.jpg'} className={classes.hero} />
    <div className={classes.afterHero}>
      <div className={classes.columns}>
        <div className={[classes.column,classes.hideWhenNarrow].join(' ')}>
          <Info
            copy="intro"
            className="shiftUp"
          />
          <Info copy="steering" />
          <Info copy="mission" />
          <Info copy="team" />
          <Info copy="outro" />
          {false && <Info>
            <div className={classes.logosWrap}>
              {false && <img src="http://putnam.cce.cornell.edu/images/logo.png" />}
              <img src="https://images.squarespace-cdn.com/content/5a2805f490bcce703c8d5b33/1517774938870-VYOFY3ZA32IE1NBIQYU5/PHASLogo.gif?content-type=image%2Fgif" />
            </div>
          </Info>}
        </div>
        <div className={classes.column}>
          <div className={classes.hideWhenWide}>
            <Info
              copy="intro"
              className="shiftUp"
            />
            <Info copy="steering" />
          </div>
          <Info copy="email" className="loud"/>
          <div className={classes.orderLastWhenNarrow}>
            <div className={classes.hideWhenWide}>
              <Info copy="email" className="loud"/>
            </div>
            <Info>
              <SubscribeForm />
            </Info>
          </div>

          <Thumbnail
            headline="Click here to view the site plan"
            src="/images/siteplan.jpg"
            href="/images/siteplan.jpg"
            openInNewTab
          />
          <Info copy="gardenAspects" />
          <div className={classes.hideWhenWide}>
            <Info copy="mission" />
          </div>

          <Info
            copy="eradication"
          />
          <Thumbnail
            headline="Location in Garrison"
            src="/images/redboxSurvey.jpg"
            href="/images/redboxSurvey.jpg"
            openInNewTab
          />
          <div className={classes.hideWhenWide}>
            <Info copy="team" />
            <Info copy="outro" />
            {false && (<Info>
              <div className={classes.logosWrap}>
                {false && <img src="http://putnam.cce.cornell.edu/images/logo.png" />}
                <img src="https://images.squarespace-cdn.com/content/5a2805f490bcce703c8d5b33/1517774938870-VYOFY3ZA32IE1NBIQYU5/PHASLogo.gif?content-type=image%2Fgif" />
              </div>
            </Info>)}
          </div>

        </div>
      </div>
    </div>
    <div className={classes.footer} />
  </div>
)

export default injectSheet(styles)(Homepage)
