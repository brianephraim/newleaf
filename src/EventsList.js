import React, {PureComponent} from "react"
import injectSheet from 'react-jss';
import Markdown from 'react-markdown';
import {
  headerFontName,
  bodyFontName,
  panelBgColor,
  linkColor,
} from './constants';

const targetBlank = () => '_blank';

const styles={
  // promoWrap: {
  //   // border: `3px solid ${panelBgColor}`,
  //   // margin: '0 20px 20px 20px',
  //
  // }
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

class MarkdownHideAble extends PureComponent {
  constructor({date}){
    super();
    const now = Date.now();
    const oneDay = 86400000
    this.expired = ((date + oneDay) - now) > 0;
    console.log('----',date,oneDay,now)
    this.asdf = 'zxcv'
  }
  render(){
    const {showImportant, showMatch, name} = this.props;
    console.log(showImportant,showMatch,name);
    console.log('this.expired',this.expired)
    if (this.expired) {
      return null;
    }
    if (showMatch !== name && !showImportant){
      return null;
    }
    return (
      <Markdown {...this.props} />
    );
  }
}

const events = [
  {
    name: 'infoSession3',
    date: new Date('June 23, 2020 03:24:00').getTime(),
    copy: `${''
}### New Leaf Restoration - Info Session #3
Guest Speaker Catherine Serreau-Thompson of Cornell Coop. Ext.

Part 1) Agricultural research, food security, Master Gardener program,
Part 2) Prepare and maintain healthy soil, "feed the soil not the plants"

Tuesday, June 23, 7 – 8 p.m. [REGISTER NOW!](https://www.jblsafe.com/#/events/oiJBfNmdPA/instances/3yisVv6RM8/)`,
  },
  {

    name: 'infoSession4',
    date: new Date('June 30, 2020 03:24:00').getTime(),
    copy: `${''
}### New Leaf Restoration - Info Session #4

Speaker - Matthew Weigman of Philipstown Garden Club

Topic- Philipstown Pollinator Pathway

This is a Live Zoom Event

Tuesday, June 30, 7 – 8 p.m. [REGISTER NOW!](https://www.jblsafe.com/#/events/0wifGK10m6/instances/enKfM3jWsa/)`,
  },
  {
    name: 'infoSession5',
    date: new Date('July 14, 2020 03:24:00').getTime(),
    copy: `${''
}### New Leaf Restoration - Info Session #5

Tuesday, July 14, 7 – 8 p.m. [REGISTER NOW!](https://getlocalhop.com/new-leaf-restoration/event/tqQq7suBGg/?ticketing=1)`
  },
  {
    name: 'infoSession6',
    date: new Date('July 21, 2020 03:24:00').getTime(),
    copy: `${''
}### New Leaf Restoration - Info Session #6

Tuesday, July 21, 7 – 8 p.m. [REGISTER NOW!](https://getlocalhop.com/climate-and-human-impacts-on-hudson-river-marshes-a-presentation-by-dr-dorothy-peteet/event/ZQkhvKEL0h/?ticketing=1)`
  },

];
class EventsList extends PureComponent {
  constructor(){
    super();
    const now = Date.now();

  }
  render(){
    const {classes, showMatch, showAll} = this.props;
    const eventsNotExpired = events.filter(({date}) => {
      const now = Date.now();
      const oneDay = 86400000;
      // console.log('date',new Date(date));
      // console.log('no w',new Date(now));
      // console.log('------')
      return ((oneDay + date) - now) > 0;
      return
    });
    let eventsToUse = eventsNotExpired;
    if (!showAll) {
      eventsToUse = eventsNotExpired[0] ? [eventsNotExpired[0]] : [];
    }
    return (
      <div className={classes.promoWrap}>
      {
        eventsToUse.map(({
          name,showMatch,date,copy
        }) => {
          return (<Markdown
            linkTarget={targetBlank}
            className={classes.promoText}
            key={name}
          >
            {copy}
          </Markdown>)
        })
      }
      {false && (<MarkdownHideAble
        className={classes.promoText}
        name="infoSession6"
        key="infoSession6"
        showMatch={showMatch}
        showImportant={!showAll}
      >
        {`[See all upcoming events >](/events)`}
      </MarkdownHideAble>)}


      </div>
    );
  }
}


export default injectSheet(styles)(EventsList)
