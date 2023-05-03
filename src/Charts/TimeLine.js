import * as React from "react";
import HorizontalTimeline from 'react-horizontal-timeline';
import LineChart from "./LineChart";
import TimeLineMed from "./TimeLineMed";
/*
Format: YYYY-MM-DD
Note: Make sure dates are sorted in increasing order
*/
const VALUES = [
    '2008-06-01',
    '2010-06-01',
];

const LABELS = [
  'LineChart',
  'Medication',
];

const DISPLAY = [
  <LineChart />,
  <TimeLineMed />,
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
            values={ VALUES } 
            getLabel={(date, index) => LABELS[index]}/>
        </div>
        <div className='text-center'>
          {DISPLAY[this.state.value]}    
            </div>
      </div>
    );
  }
}