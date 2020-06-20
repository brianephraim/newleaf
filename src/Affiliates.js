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
  logoItem: {
    display:'block',
    maxHeight: 152,
  },
};

const Affiliates = ({classes}) => (
  <Info>
    <div className={classes.logosWrap}>
      {
        [
          'http://putnam.cce.cornell.edu/images/logo.png',
          'https://images.squarespace-cdn.com/content/5a2805f490bcce703c8d5b33/1517774938870-VYOFY3ZA32IE1NBIQYU5/PHASLogo.gif?content-type=image%2Fgif',
          'https://butterfieldlibrary.org/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-constantcontact-v1-0-8%2F488%2F182488%2FHdSMRhlS%2F086db6bafded4ac797f5052e15fde6a6&methods=resize%2C1000%2C5000',
          '/images/desmondfish.jpg'
        ].map(url => (
          <img
            src={url}
            key={url}
            className={classes.logoItem}
          />
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
