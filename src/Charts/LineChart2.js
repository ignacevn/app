import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import data from './Data2.json';

const myChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // get the LabObservations data from the JSON
    const labObservations = data.LabObservations;

    // extract the dates and values into separate arrays
    const dates = labObservations.map(obs => obs.date);
    const values = labObservations.map(obs => obs.value);

    // create a new Chart instance
    const chart = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: 'Lab Observations',
          data: values,
          borderColor: 'rgb(75, 192, 192)',
          fill: false
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'month'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // return a cleanup function that destroys the chart instance when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  return () => {
    <div ref={chartRef} />};
};

export default myChart;