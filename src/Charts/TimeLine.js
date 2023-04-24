import * as React from "react";
import HorizontalTimeline from 'react-horizontal-timeline';

/*
Format: YYYY-MM-DD
Note: Make sure dates are sorted in increasing order
*/
const VALUES = [
    '2008-06-01',
    '2010-06-01',
    '2013-06-01',
    '2015-03-01',
    '2019-01-01',
    '2019-06-17',
    '2019-08-01',
];

export default class TimeLine extends React.Component {
  state = { value: 0, previous: 0 };

  render() {
    return (
      <div>
        {/* Bounding box for the Timeline */}
        <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={ VALUES } />
        </div>
        <div className='text-center'>
          {/* any arbitrary component can go here */}    
          {this.state.value}
        </div>
      </div>
    );
  }
}

