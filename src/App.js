import * as React from "react";

import "@syncfusion/ej2/material.css";
import {
  DashboardLayoutComponent,
  PanelsDirective,
  PanelDirective,
} from "@syncfusion/ej2-react-layouts";

import LineChart from "./Charts/LineChart";
import TimeLine2 from "./Charts/TimeLine2";
import TimeLine from "./Charts/TimeLine";
import PatientProfile from "./Charts/PatientProfile";
import "./App.css";

const WebDashboard = () => {
  const onCreate = () => {
    //logic goes here
  };

  const onPanelResize = (args) => {
    if (
      args.element &&
      args.element.querySelector(".e-panel-container .e-panel-content div div div")
    ) {
      let chartObj = args.element.querySelector(".e-panel-container .e-panel-content div div div")
        .ej2_instances[0];
      const height = args.element.querySelector(".e-panel-container .e-panel-content").clientHeight;
      chartObj.height = `${height - 20}`;
      chartObj.width = "100%";
      chartObj.refresh();
    }
  };

  return (
    <div className="control-section" id="predefine_control">
      <div className="content-wrapper" style={{ maxWidth: "100%" }}>
        <DashboardLayoutComponent
          created={onCreate}
          columns={4}
          rows={5}
          id="predefine_dashboard"
          resizeStop={onPanelResize}
          allowResizing={true}
          allowDragging={false}
        >
          <PanelsDirective>
            <PanelDirective
              header="1"
              content={LineChart}
              sizeX={1}
              sizeY={3}
              row={0}
              col={0}
            ></PanelDirective>
            <PanelDirective
              header="2"
              content={PatientProfile}
              sizeX={1}
              sizeY={2}
              row={3}
              col={0}
            ></PanelDirective>
            <PanelDirective
              header="3"
              content={TimeLine}
              sizeX={3}
              sizeY={2}
              row={0}
              col={1}
            ></PanelDirective>
            <PanelDirective
              header="4"
              content={TimeLine2}
              sizeX={3}
              sizeY={2}
              row={2}
              col={1}
            ></PanelDirective>
            <PanelDirective
              header="5"
              content={LineChart}
              sizeX={3}
              sizeY={1}
              row={4}
              col={1}
            ></PanelDirective>
          </PanelsDirective>
        </DashboardLayoutComponent>
      </div>
    </div>
  );
};

export default WebDashboard;
