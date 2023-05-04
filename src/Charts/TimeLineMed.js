import React, { useEffect, useRef } from 'react';
import * as vis from 'vis-timeline';
import 'vis-timeline/dist/vis-timeline-graph2d.min.css';
import data from './Data2.json';

const TimeLineMed = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;
    const Medication = data.Medication;
    const mappedGroups = Medication.map((medication, index) => ({
    id: index,
    content: medication.name}));

    const mappedData = Medication.map((medication, index) => ({
      id: index,
      content: medication.name,
      start: new Date(medication.startDate),
      stop: new Date(medication.stopDate),
      title: medication.date + ":" + medication.medicine,
      group: index,})
    );

    
//opties aanpassen
    const options = {editable: true //can be true or false, kunnen editable ook verfijnen in options maar ook per dataitem of groep veranderen
     };

    const timeline = new vis.Timeline(container, mappedData, mappedGroups, options);

    return () => {
      timeline.destroy();
    };
  }, []);

  return <div ref={timelineRef} />;
};

export default TimeLineMed;