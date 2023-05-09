import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Tooltip, DateTime, LineSeries } from "@syncfusion/ej2-react-charts";

const LineChart = ({ data }) => {
  const dataValues = data.LabObservations.map((observation) => ({ x: new Date(observation.date), y: observation.value }));

  let name = "";
  let title = "";
  if (data.LabObservations[0]?.test === "2857-1") {
    name = "PSA (ng/mL)";
    title = "Lab Observations: Prostate specific Ag";
  } else if (data.LabObservations[0]?.test === "98979-8") {
    name = "eGFR (mL/min)";
    title = "Lab Observations: Glomerular Filtration Rate";
  }

  return (
    <ChartComponent
      id="chart"
      primaryXAxis={{
        valueType: "DateTime",
        labelFormat: "MM/dd/yyyy",
      }}
      title={title}
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
          name={name}
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;