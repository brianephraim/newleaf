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

};


const Homepage = ({classes}) => (
  <PageLayout>
    <div className={[classes.afterHero,classes.hideWhenNarrow].join(' ')}>
      <div className={classes.columns}>
        <div className={classes.column}>
          <Info
            copy="intro"
          />
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
        </div>
      </div>
    </div>


    <div className={[classes.afterHero,classes.hideWhenWide].join(' ')}>
      <div className={classes.columns}>
        <div className={classes.column}>
          <Info
            copy="intro"
          />
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
        </div>
      </div>
    </div>
  </PageLayout>
)

export default injectSheet(styles)(Homepage)
