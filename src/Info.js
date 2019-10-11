import React from "react"
import {View, Text} from 'react-native';
import Markdown from 'react-markdown';
import copyDict from './copy';
import injectSheet from 'react-jss';
import {
  headerFontName,
  bodyFontName,
  panelBgColor,
} from './constants';



const styles = {
  container: {
    fontFamily: bodyFontName,
    flexShrink: 1,
  },
  loud: {
    // fontWeight:'bold',
    fontFamily: headerFontName,
    fontSize:20,
    textAlign:'center',
    alignSelf:'center',
    // width:'80%'
  },
  header: {
    color:'black',
    marginTop:20,
    fontFamily: 'Sansita One',
  },
  afterHero: {
    marginLeft:20,
    marginRight:20,
  },
  afterHeroWithBeside: {
    marginRight:0,
  },
  twoThirds: {
    width:'66%',
  },
  bodyText: {
    flexGrow: 1,
    
    display:'flex',
    flexDirection:'column',
    padding: 20,
    backgroundColor: panelBgColor,
    borderRadius: 5,
    position:'relative',
    '& a': {
      color:'yellow !important',
      '&:hover': {
        color: 'yellow'
      },
      '&:visited': {
        color: 'yellow'
      },
      '&:active': {
        color: 'yellow'
      },
    },
  },
  bodyWrap: {
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-evenly',
  },
  bold:{fontWeight:'bold'},
  insideHero: {
    marginTop:-200,    
    // width:'50%',
    
  },
};

styles['@media (min-width: 1024px)'] = {
  container: {
    color: 'white'
  }
};

const targetBlank = () => '_blank';

const Info = (props) => {
  const {copy,classes, heroSrc, beside, className, bodyTextClassName, below} = props;
  console.log('bodyTextClassName',bodyTextClassName);
  const {header,body} = copyDict[copy];
  if (bodyTextClassName === 'loud'){

  }
  return (
    <div className={[classes.container,classes[className]].join(' ')}>
      {heroSrc && <img src={heroSrc} />}
      <div className={[classes.afterHero,beside && classes.afterHeroWithBeside].join(' ')}>
        {header && <h2 className={[classes.header].join(' ')}>{header}</h2>}
        <div className={[classes.bodyWrap].join(' ')}>
          <div>
            <Markdown
              linkTarget={targetBlank}
              className={[classes.bodyText,heroSrc && classes.insideHero, classes[bodyTextClassName]].join(' ')}
            >
              {body}
            </Markdown>
            {below}
          </div>
          {beside}
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Info)