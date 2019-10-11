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
  headerLogo: {
    alignSelf:"stretch",
    margin:80,
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
    width:'50%',
  },
  hero: {
    width:'100%',
  },

};

class Input extends React.Component {
  state = {val:''};
  render(){
    return <input onChange={(event) => this.setState({ val: event.target.value })} value={this.state.val} {...this.props} />
  }
}

const Homepage = ({classes}) => (
  <div className={classes.container}>
    <img src={'/images/headerlogo.png'} className={classes.headerLogo} />
    <img src={'/images/widePhoto.jpg'} className={classes.hero} />
    <div className={classes.afterHero}>
      <div className={classes.columns}>
        <div className={classes.column}>
          <Info
            copy="intro"
            className="shiftUp"
          />
          <Info copy="steering" />
          <Info copy="discussionsWithRec" />
          <Info copy="governance" />
          <Info copy="team" />
          <Info copy="outro" />

        </div>
        <div className={classes.column}>

          <Info copy="email" className="loud"/>

          <Info>
            <SubscribeForm />

          </Info>

          <Thumbnail
            headline="Click here to view the site plan"
            src="/images/siteplan.jpg"
            href="/images/siteplan.jpg"
            openInNewTab
          />
          <Info copy="gardenAspects" />
          <Info
            copy="eradication"
            className="loud"
          />
          <Thumbnail
            headline="Location in Garrison"
            src="/images/googleEarth.jpg"
            href="/images/googleEarth.jpg"
            openInNewTab
          />

        </div>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </div>
)

export default injectSheet(styles)(Homepage)
