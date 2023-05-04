import React, { useEffect, useRef } from 'react';
import * as vis from 'vis-timeline';
import 'vis-timeline/dist/vis-timeline-graph2d.min.css';
import data from './Data2.json';
import './kleur.css'

const Procedures = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;
    const procedures = data.procedures;
    const Pathologie = data.Pathologie
    const groups = [{ id: 1, content: '' },];

    // Map the procedures array to the required format for the Timeline library
    const mappedData = procedures.map((procedure, index) => {
      let className = '';

    if (procedure.ProcedureCode === 386792000) {
      className = 'procedure-TURB';
    } else if (procedure.ProcedureCode === 108034003) {
      className = 'procedure-Cystectomy';
    } else if(Pathologie.stage === 'CIS') {
      className = 'stage-cis';
    } else if (Pathologie.stage === 'Ta') {
      className = 'stage-ta';
    } else if (Pathologie.stage === 'T2') {
      className = 'stage-t2';
    }
    return{
      id: index,
      content: procedure.name,
      start: new Date(procedure.date),
      title: procedure.date + ":" + procedure.name,
      group: 1,
      className}
    });

    const options = {};

    const timeline = new vis.Timeline(container, mappedData, groups, options);

    return () => {
      timeline.destroy();
    };
  }, []);

  return <div ref={timelineRef} />;
};

export default Procedures;
