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
  commentsInput: {

  },
  label: {
    fontFamily: bodyFontName,
    color:'black',
  },
  h2: {
    fontFamily: headerFontName,
    fontWeight:'normal',
    color:'black',
  },
  indicatesRequired: {
    textAlign: 'right',
    fontSize: 11,
    marginRight: '4%',
    color:'black',
  },
  container: {
    // fontFamily: bodyFontName,
    // flexShrink: 1,
    // color:'black',
    // margin: 20,
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
  },

  shiftUp: {
    marginTop:-200
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
  hidden: {
    display:'none',
  },
  shovedOut: {position: 'absolute', left: '-5000px',},
};


const SubscribeForm = ({classes}) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: `
          <!-- Begin Mailchimp Signup Form -->
          <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
          <style type="text/css">
            #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
            /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
               We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
          </style>
          <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='MMERGE1';ftypes[1]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
          <!--End mc_embed_signup-->
        `}}
      ></div>
      <div id="mc_embed_signup" className={classes.container}>

        <form action="https://newleaf-restoration.us20.list-manage.com/subscribe/post?u=dea3d7b3d2222a3bc9cfbc87d&amp;id=2f514eeb65" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <h2 className={classes.h2}>Subscribe for email updates about New Leaf</h2>
            <div className={classes.indicatesRequired}><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group">
            <label for="mce-EMAIL" className={classes.label}>
              Email Address  <span className="asterisk">*</span>
            </label>
            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
          </div>
          <div className="mc-field-group">
            <label for="mce-MMERGE1" className={classes.label}>Comments: (optional) </label>
            <input type="text" name="MMERGE1" className={classes.commentsInput} id="mce-MMERGE1" />
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" className={classes.hidden}></div>
            <div className="response" id="mce-success-response" className={classes.hidden}></div>
          </div>
            <div className={classes.shovedOut} aria-hidden="true"><input type="text" name="b_dea3d7b3d2222a3bc9cfbc87d_2f514eeb65" tabindex="-1" value="" /></div>
            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
            </div>
        </form>
      </div>
    </>
  );
};

export default injectSheet(styles)(SubscribeForm);
