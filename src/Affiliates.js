import React from "react"
import injectSheet from 'react-jss';
import Info from './Info';



const styles={
  logosWrap: {
    display:'flex',
    flexDirection:'row',
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'space-evenly',
    padding:20,
    flexWrap: 'wrap',
  },
  logoItemLink: {
    display:'block',
    maxHeight: 152,
    margin:10,
  },
  logoItemImage: {
    display:'block',
    maxHeight: 152,
  },
};

const Affiliates = ({classes}) => (
  <Info>
    <div className={classes.logosWrap}>
      {
        [
          {src:'/images/cornell.jpg',href:'http://putnam.cce.cornell.edu/'},
          {src:'/images/audubon.gif',href:'https://www.putnamhighlandsaudubon.org/'},
          {src:'/images/butterfield.png',href:'https://butterfieldlibrary.org/'},
          {src:'/images/desmondfish.jpg',href:'https://desmond-fish-library.square.site/'}
        ].map(({src,href}) => (
          <a
            href={href}
            target="_blank"
            key={href}
            className={classes.logoItemLink}
          >
            <img
              src={src}
              className={classes.logoItemImage}
            />
          </a>
        ))
      }



      {
        /*
        -Audubon- you have
        -Cornell Cooperative Extension- you have
        Stonecrop gardens- I will send
        -Butterfield Library- you have
        - Desmond Fish Library- you have
        Philipstown Climate Smart Communities- I will send
         */
      }
    </div>
  </Info>
)

export default injectSheet(styles)(Affiliates)
