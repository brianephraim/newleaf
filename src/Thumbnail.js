import React from "react"
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
    padding:20,
    fontFamily: headerFontName,
    border: `10px solid rgba(255,255,255,.25)`,
    backgroundColor: panelBgColor,
    display:'flex',
    flexDirection:'column',
    marginTop: 20,
    borderRadius: 5,
    textDecoration:'none',
    color: 'white',
    textAlign:'center',
    '&:hover': {
      opacity: .8,
    },
    '& h2': {
      fontFamily: headerFontName,
      textDecoration: 'none',
      fontWeight:'normal'
    },
  },
};

const targetBlank = () => '_blank';

const Thumbnail = (props) => {
  const {href,src,openInNewTab,classes,headline} = props;
  return (
    <a
      className={classes.container}
      href={href}
      target={openInNewTab && '_blank'}

    >
      {headline && <h2>{headline}</h2>}
      <img src={src}  />
    </a>
  );
};

export default injectSheet(styles)(Thumbnail)