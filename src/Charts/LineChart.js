import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Tooltip, DateTime, LineSeries } from "@syncfusion/ej2-react-charts";
import data from "./Data2.json"

const LineChart = () => {

  const dataValues = data.LabObservations.map((observation) => ({ x: new Date(observation.date), y: observation.value }));

  return (
    <ChartComponent
      id="chart"
      primaryXAxis={{
        valueType: "DateTime",
        labelFormat: "MM/dd/yyyy",
      }}
      title="Lab Observations: Glomerular filtration rate"
      legendSettings={{
        visible: true,
      }}
      tooltip={{
        enable: true,
      }}
    >
      <Inject services={[LineSeries, Legend, Tooltip, DateTime]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={dataValues}
          xName="x"
          yName="y"
          type="Line"
          name="GFR (mL/min)"       //this is hardcoded, If time need to change
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;