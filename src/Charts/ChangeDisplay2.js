import * as React from "react";
import { useState } from "react";
import HorizontalTimeline from 'react-horizontal-timeline';
import LineChart from "./LineChart";
import TimeLineMed from "./TimeLineMed";
import Procedures from "./Procedures";

const ChangeDisplay2 = ({ data }) => {
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

  const [loadedData, setLoadedData] = useState(data);
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);

  const handleIndexClick = (index) => {
    setValue(index);
    setPrevious(value);
  };

  const DISPLAY = [
    <LineChart data={loadedData} />,
    <Procedures data={loadedData} />,
    <TimeLineMed data={loadedData} />,
  ];

  return (
    <div>
      <div style={{ width: '75%', height: '100px', margin: '0 auto' }}>
        <HorizontalTimeline
          index={value}
          indexClick={handleIndexClick}
          values={VALUES}
          getLabel={(date, index) => LABELS[index]}
        />
      </div>
      <div className='text-center'>
        {DISPLAY[value]}
      </div>
    </div>
  );
};

export default ChangeDisplay2;