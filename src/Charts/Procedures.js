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
    const pathologie = data.Pathologie
    const groups = [{ id: 1, content: '' },{ id: 2, content: 'Pathologie' }];

    // Map the  array to the required format for the Timeline library
    const mappedProcedures = procedures.map((procedure, index) => {
      let className = '';

      if (procedure.ProcedureCode === 386792000) {
        className = 'procedure-TURB';
      } else if (procedure.ProcedureCode === 108034003) {
        className = 'procedure-Cystectomy';
      }
      return {
        id: index,
        content: procedure.name,
        start: new Date(procedure.date),
        title: procedure.date + ':' + procedure.name,
        group: 1,
        className,
      };
    });

    const mappedPathologie = pathologie.map((p, index) => {
      let className = '';
      if (p.stage === 'CIS') {
        className = 'stage-cis';
      } else if (p.stage === 'Ta') {
        className = 'stage-ta';
      } else if (p.stage === 'T2') {
        className = 'stage-t2';
      }
      return {
        id: index + procedures.length,
        content: p.stage + ':' + p.grade,
        start: new Date(p.date),
        title: `${p.date}: Stage ${p.stage}, Grade ${p.grade}`,
        group: 2,
        className,
      };
    });

    const mappedData = [...mappedProcedures, ...mappedPathologie];

    

    // Add the pathologie data to the mappedData array
   

    const options = {};

    const timeline = new vis.Timeline(container, mappedData, groups, options);

    return () => {
      timeline.destroy();
    };
  }, []);

  return <div ref={timelineRef} />;
};

export default Procedures;
