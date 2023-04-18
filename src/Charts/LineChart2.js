import * as React from "react";
import Utils from  "./Utils";

const labels = [1, 2, 3, 4, 5, 6, 7];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
   },
  ],
  options: {
  title: {
    display: true,
    text: 'Chart JS Multiple Lines Example',
    }}};

const config = {
  type: 'line',
  data: data,
};


