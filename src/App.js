import * as React from "react";
import { useState } from "react";

import "@syncfusion/ej2/material.css";
import {
  DashboardLayoutComponent,
  PanelsDirective,
  PanelDirective,
} from "@syncfusion/ej2-react-layouts";

import ChangeDisplay from "./Charts/ChangeDisplay";
import ChangeDisplay2 from "./Charts/ChangeDisplay2.js";
import PatientProfile from "./Charts/PatientProfile";
import OtherHealth from "./Charts/OtherHealth";
import Consultation from "./Charts/Consultation";
import data from "./Charts/Data2.json";
import "./App.css";


const WebDashboard = () => {
  const [loadedData, setLoadedData] = useState(data);
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
          rows={3}
          id="predefine_dashboard"
          resizeStop={onPanelResize}
          allowResizing={true}
          allowDragging={false}
        >
          <PanelsDirective>
            <PanelDirective
              header="1"
              content={() => <PatientProfile data={loadedData} />}
              sizeX={1}
              sizeY={1}
              row={0}
              col={0}
            ></PanelDirective>
            <PanelDirective
              header="2"
              content={() => <OtherHealth data={loadedData} />}
              sizeX={1}
              sizeY={2}
              row={1}
              col={0}
            ></PanelDirective>
            <PanelDirective
              header="3"
              content={() => <ChangeDisplay data = {loadedData}/>}
              sizeX={3}
              sizeY={2}
              row={0}
              col={1}
            ></PanelDirective>
            <PanelDirective
              header="4"
              content={() => <ChangeDisplay2 data = {loadedData}/>}
              sizeX={3}
              sizeY={2}
              row={2}
              col={1}
            ></PanelDirective>
            <PanelDirective
              header="5"
              content={() => <Consultation data={loadedData} />}
              sizeX={1}
              sizeY={1}
              row={2}
              col={0}
            ></PanelDirective>
          </PanelsDirective>
        </DashboardLayoutComponent>
        <p className="dashboard-text">Made by Yannic Scheyvaerts, Ignace Van Nederkassel and Arne Hermans in collaboration with KUL and TiroHealth</p>
      </div>
    </div>
  );
};

export default WebDashboard;
