import React from 'react';
import data from './Data2.json';
import { Chart } from 'chart.js';

function MyChart() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const labObservations = data.LabObservations;

    const dates = labObservations.map(obs => obs.date);
    const values = labObservations.map(obs => obs.value);

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'LabObservations',
            data: values,
            borderColor: 'rgb(75, 192, 192)',
            fill: false
          },
        ],
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default MyChart;