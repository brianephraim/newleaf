import React from "react"
import {View, Text} from 'react-native';
import Markdown from 'react-markdown';
import copyDict from './copy';
import injectSheet from 'react-jss';
import {
  headerFontName,
  bodyFontName,
  panelBgColor,
  linkColor
} from './constants';



const styles = {
  container: {
    fontFamily: bodyFontName,
    flexShrink: 1,
    color:'white',
    margin: 20,
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
    marginTop:20,
    fontFamily: 'Sansita One',
    color: 'black',
    marginTop:60,
    textShadow:'0px 1px 5px white',
  },

  shiftUp: {
    marginTop:-200
  },
  '@media (max-width: 725px)': {
    shiftUp: {
      marginTop:0,
    },
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
      fontFamily: bodyFontName,
      color:`${linkColor} !important`,
      '&:hover': {
        color: linkColor
      },
      '&:visited': {
        color: linkColor
      },
      '&:active': {
        color: linkColor
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
  // promoWrap: {
  //   // border: `3px solid ${panelBgColor}`,
  //   // margin: '0 20px 20px 20px',
  //
  // },
  promoText: {
    flexGrow: 1,

    display:'flex',
    flexDirection:'column',
    padding: 20,
    border: `3px solid ${panelBgColor}`,
    // backgroundColor: panelBgColor,
    borderRadius: 5,
    position:'relative',
    margin: '0 20px 20px 20px',
    '& a': {
      fontFamily: bodyFontName,
      color:`#4E852C !important`,
      fontWeight:'bold',
      '&:hover': {
        color: '#4E852C'
      },
      '&:visited': {
        color: '#4E852C'
      },
      '&:active': {
        color: '#4E852C'
      },
    },
  },
};

// styles['@media (min-width: 1024px)'] = {
//   container: {
//     // color: 'white'
//   }
// };

const targetBlank = () => '_blank';

const Info = (props) => {
  const {copy,classes, className, bodyTextClassName, content, children = null } = props;
  let {header} = props;
  const {body} = copyDict[copy] || {};
  if (!header && copy){
    header = copyDict[copy].header;
  }
  return (
    <div className={[classes.container,classes[className]].join(' ')}>
      {header && <h2 className={[classes.header].join(' ')}>{header}</h2>}
      {children && (
        <div className={[classes.bodyText,classes[bodyTextClassName]].join(' ')}>
          {children}
        </div>
      )}
      {copy && (
        <Markdown
          linkTarget={targetBlank}
          className={[classes.bodyText,classes[bodyTextClassName]].join(' ')}
        >
          {body}
        </Markdown>
      )}
    </div>
  );
};

export const Promo = injectSheet(styles)(props => {
  const {classes} = props;
  return (
    <div className={classes.promoWrap}>
      <Markdown
        linkTarget={targetBlank}
        className={classes.promoText}
      >
        {`Learn more about New Leaf Restoration by being part of the first of a series of Zoom segments, co-sponsored by New Leaf Restoration, the Butterfield Library, and the Desmond-Fish Library.

  Tuesday, June 9, 7 – 8 p.m. [REGISTER NOW!](https://getlocalhop.com/live-new-leaf-restoration-a-philipstown-community-garden-info-session/event/YjBfngPqtD/?ticketing=1)`}
      </Markdown>

    </div>
  );
})

export default injectSheet(styles)(Info)
