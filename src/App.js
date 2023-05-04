import * as React from "react";

import "@syncfusion/ej2/material.css";
import {
  DashboardLayoutComponent,
  PanelsDirective,
  PanelDirective,
} from "@syncfusion/ej2-react-layouts";


import TimeLineMed from "./Charts/TimeLineMed";
import ChangeDisplay from "./Charts/ChangeDisplay";
import PatientProfile from "./Charts/PatientProfile";
import OtherHealth from "./Charts/OtherHealth";
import Consultation from "./Charts/Consultation";
import MyChart from "./Charts/LineChart2";
import "./App.css";
import LineChart from "./Charts/LineChart";

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
      <h1 className="dashboard-title">P&O: Medical History Visualisation</h1>
        <DashboardLayoutComponent
          created={onCreate}
          columns={4}
          rows={4}
          id="predefine_dashboard"
          resizeStop={onPanelResize}
          allowResizing={true}
          allowDragging={true}
        >
          <PanelsDirective>
            <PanelDirective
              header="1"
              content={PatientProfile}
              sizeX={1}
              sizeY={1}
              row={0}
              col={0}
            ></PanelDirective>
            <PanelDirective
              header="2"
              content={OtherHealth}
              sizeX={1}
              sizeY={2}
              row={2}
              col={0}
            ></PanelDirective>
            <PanelDirective
              header="3"
              content={ChangeDisplay}
              sizeX={3}
              sizeY={2}
              row={0}
              col={1}
            ></PanelDirective>
            <PanelDirective
              header="4"
              content={LineChart}
              sizeX={3}
              sizeY={2}
              row={2}
              col={1}
            ></PanelDirective>
            <PanelDirective
              header="5"
              content={Consultation}
              sizeX={3}
              sizeY={1}
              row={4}
              col={1}
            ></PanelDirective>
          </PanelsDirective>
        </DashboardLayoutComponent>
        <p className="dashboard-text">Made by Yannic Scheyvaerts, Ignace Van Nederkassel and Arne Hermans in collaboration with KUL and TiroHealth</p>
      </div>
    </div>
  );
};

export default WebDashboard;
