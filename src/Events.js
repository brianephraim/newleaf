import React from "react"
import { Link } from "gatsby"

// import Image from "../components/image"
import SEO from "./components/seo"
// import {GoogleEarthImage} from "../components/image"
import {Image,Text} from 'react-native';
import Markdown from 'react-markdown';
import copy from './copy';
import Info from './Info';
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
import Affiliates from './Affiliates';
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
        showAll
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

};

const Homepage = ({classes}) => (
  <div className={classes.container}>
    <SEO />
    <div className={classes.headerLogoWrap}>
      <img src={'/images/headerlogo.png'} className={classes.headerLogo} />
      <p className={classes.headerText}>Philipstown Community Gardens</p>
      <p className={classes.headerText}>Garrison, NY</p>
    </div>
    <img src={'/images/widePhoto.jpg'} className={classes.hero} />
    <p className={classes.headerText}>UPCOMING EVENTS:</p>
    <EventsList
      showAll
    />


    <div className={classes.footer} />
  </div>
)

export default injectSheet(styles)(Homepage)
