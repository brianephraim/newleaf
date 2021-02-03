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
import {
  headerFontName,
  bodyFontName,
  panelBgColor,
  linkColor,
} from './constants';
import EventsList from './EventsList';

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
    justifyContent: 'space-between',
    alignSelf: 'center',
    minHeight: '100%',

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

};


const PageLayout = ({classes,children}) => (
  <div className={classes.container}>
    <div>
      <SEO title="New Leaf Restoration"/>
      <div className={classes.headerLogoWrap}>
        <img src={'/images/headerlogo.png'} className={classes.headerLogo} />
        <p className={classes.headerText}>Philipstown Community Gardens</p>
        <p className={classes.headerText}>Garrison, NY</p>
      </div>
      <img src={'/images/widePhoto.jpg'} className={classes.hero} />
      {children}
    </div>
    <div className={classes.footer} />
  </div>
)

export default injectSheet(styles)(PageLayout)
