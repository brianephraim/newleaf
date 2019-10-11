import React from "react"
import { Link } from "gatsby"

import Layout from "./components/layout"
// import Image from "../components/image"
import SEO from "./components/seo"
// import {GoogleEarthImage} from "../components/image"
import {Image,Text,Linking} from 'react-native';
import Markdown from 'react-markdown';
import copy from './copy';
import Info from './Info';
import Thumbnail from './Thumbnail';

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
const IndexPage = () => (
  <Layout>
    <Info
      copy="intro"
      heroSrc='/images/widePhoto.jpg'
      beside={<Info copy="steering" />}
      below={
        <Thumbnail
          headline="Click here to view the site plan"
          src="/images/siteplan.jpg"
          href="/images/siteplan.jpg"
          openInNewTab
        />
        }
    />
    
    <Info
      copy="gardenAspects"
      beside={
        <Info
          copy="eradication"
          className="loud"
        />
      }
    />
    <img src="/images/googleEarth.jpg" />
    <img src="/images/siteplan.jpg" />
    <Info copy="discussionsWithRec" />
    <Info copy="governance" />
    <Info copy="team" />
    <Info copy="outro" />
    <Markdown
      linkTarget={targetBlank}
    >
      {copy.intro.body}
    </Markdown>
    <Markdown
      linkTarget={targetBlank}
    >
      {copy.steering.body}
    </Markdown>
    <Markdown
      linkTarget={targetBlank}
    >
      {copy.gardenAspects.body}
    </Markdown>
    <SEO title="Home" />
    <Text style={{color: 'blue'}}
      accessibilityRole="link"
      href='http://google.com'
      target="_blank"
    >
      Google!
    </Text>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image
          style={{width: 50, height: 50}}
          source={{uri: '/images/widePhoto.jpg'}}
        />
      <Image
          style={{width: 50, height: 50}}
          source={{uri: '/images/googleEarth.jpg'}}
        />
      <Image
          style={{width: 50, height: 50}}
          source={{uri: '/images/siteplan.jpg'}}
        />
      <Page />
      


    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
