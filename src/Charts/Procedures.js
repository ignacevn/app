import React, { useEffect, useRef } from 'react';
import * as vis from 'vis-timeline';
import 'vis-timeline/dist/vis-timeline-graph2d.min.css';
import './kleur.css'

const Procedures = ({data}) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;
    const procedures = data.procedures;
    const pathologie = data.Pathologie
    const groups = [{ id: 1, content: '' },{ id: 2, content: 'Pathologie' }];

    // Map the  array to the required format for the Timeline library
    const mappedProcedures = procedures.map((procedure, index) => {
      let className = '';

      if (procedure.ProcedureCode === 386792000) {   //extra procedures toevoegen indien we meer data hebben
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
      let title = '';
      let content = '';
      if (p.stage === 'CIS') {  //stages van prostaatkanker zijn niet geprogrammeerd omdat we dit niet
                                // als data hebben doorgekregen, dit zou dezelfde vorm als onderstaande hebben
                                // hetzelfde geld bij T4 stadium
        className = 'stage-cis';
        content= 'CIS';
        title= `${p.date}: Stage Cis`;
      } else if (p.stage === 'Ta') {
        className = 'stage-ta';
        content= 'Ta:' + p.grade;
        title= `${p.date}: Stage Ta, Grade ${p.grade}`;
      } else if (p.stage === 'T1') {
        className = 'stage-t1';
        content= 'T1:' + p.grade;
        title= `${p.date}: Stage T1, Grade ${p.grade}`;
      } else if (p.stage === 'T2') {
        className = 'stage-t2';
        content= 'T2:' + p.grade;
        title= `${p.date}: Stage T2, Grade ${p.grade}`;
      } else if (p.stage === 'T3') {
        className = 'stage-t3';
        content= 'T3:' + p.grade;
        title= `${p.date}: Stage T3, Grade ${p.grade}`;
      };
      return {
        id: index + procedures.length,
        content,
        start: new Date(p.date),
        title,
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
  },);

  return <div ref={timelineRef} />;
};

export default Procedures;
