import React from "react"
import { Link } from "gatsby"
import injectSheet from 'react-jss';
import PageLayout from './PageLayout'
import {
  headerFontName,
  bodyFontName,
  panelBgColor,
  linkColor,
} from './constants';

const styles={
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 20px',
  },
  homepageLink: {
    '&:any-link':{
      color: 'red'
    },
    fontFamily: bodyFontName,
    marginBottom: 40,
  },
  h2: {
    fontFamily: headerFontName,
  },
  headerLogoWrap: {
    margin:'80px 80px 20px 80px',
    alignSelf:'stretch',
  },
  donateButton: {
    display: 'block',
    backgroundColor: '#50c878',
    color: 'white',
    border: 'none',
    fontFamily: bodyFontName,
    margin: '7px 15px',
    padding: '7px 0',
    width: 90,
    cursor: 'pointer',
  },
  columns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '0 20px 30px',
    '@media (max-width: 475px)': {
      flexDirection: 'column',
    },
  },
  column: {

  },
};

const DonateScreen = ({classes}) => {
  return (
    <PageLayout>
      <div className={classes.container}>
        <h2 className={classes.h2}>Donation payment received!</h2>
        <p>Check you email for a receipt.</p>
        <p>If you have any problems, email info@newleaf-restoration.org</p>
        <a href="/" className={classes.homepageLink}>Go back to the homepage</a>
      </div>
    </PageLayout>
  );
};

export default injectSheet(styles)(DonateScreen);
