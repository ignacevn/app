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

    const mappedData = Medication.map((medication, index) => {

      let type = '';
      if (medication.stopDate === "") {
        type = 'box';
      } else {
        type = 'range';
      }
      
      return{
      id: index,
      content: medication.name,
      start: new Date(medication.startDate),
      end: new Date(medication.stopDate),
      title: medication.startDate + "-" + medication.stopDate + ":" + medication.name,
      group: index,
      type,};}
    );

    
//opties aanpassen
    const options = {}

    const timeline = new vis.Timeline(container, mappedData, mappedGroups, options);

    return () => {
      timeline.destroy();
    };
  }, []);

  return <div ref={timelineRef} />;
};

export default TimeLineMed;