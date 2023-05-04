import * as React from "react";
import HorizontalTimeline from 'react-horizontal-timeline';
import LineChart from "./LineChart";
import TimeLineMed from "./TimeLineMed";
import Procedures from "./Procedures";


/*
Format: YYYY-MM-DD
VALUES is gewoon zodat we van display kunnen veranderen, moet in chronologsiche volgorde
*/
const VALUES = [
    '2009-06-01',
    '2010-06-01',
    '2011-06-01',

];

const LABELS = [
  'LineChart',
  'Procedures',
  'Medication',
  
];

const DISPLAY = [
  <LineChart />,
  <Procedures />,
  <TimeLineMed />,
];


export default class ChangeDisplay extends React.Component {
  state = { value: 0, previous: 0 };

  render() {
    return (
      <div>
        {/* Bounding box for the Timeline */}
        <div style={{ width: '75%', height: '100px', margin: '0 auto' }}>
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