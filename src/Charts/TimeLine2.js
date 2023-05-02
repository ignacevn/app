import React, { useEffect, useRef } from 'react';
import * as vis from 'vis-timeline';
import 'vis-timeline/dist/vis-timeline-graph2d.min.css';

const TimeLine2 = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;
    const data = [
      { id: 1, content: 'item 1', start: '2013-04-20',end: '2013-04-22', group: 1 },
      { id: 2, content: 'item 2', start: '2013-04-10',end: '2023-04-17', group: 1 },
      { id: 3, content: 'vaccin 3', start: '2013-04-18', group: 2, title: 'Vaccin genomen omdat hij op vakantie vertrekt naar africa' },
      { id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19', group: 3 },
      { id: 5, content: 'item 5', start: '2013-04-25', group: 2 },
      { id: 6, content: 'item 6', start: '2013-04-27',end: '2013-04-31', group: 4 },
    ];
    const groups = [
      { id: 1, content: 'Group 1' },
      { id: 2, content: 'Group 2' },
      { id: 3, content: 'Group 3' },
      { id: 4, content: 'Group 4' },
    ];
//opties aanpassen
    const options = {editable: true //can be true or false, kunnen editable ook verfijnen in options maar ook per dataitem of groep veranderen
     };

    const timeline = new vis.Timeline(container, data, groups, options);

    return () => {
      timeline.destroy();
    };
  }, []);

  return <div ref={timelineRef} />;
};

export default TimeLine2;
