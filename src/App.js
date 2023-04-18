import * as React from "react";

import "@syncfusion/ej2/material.css";
import {
  DashboardLayoutComponent,
  PanelsDirective,
  PanelDirective,
} from "@syncfusion/ej2-react-layouts";

import LineChart from "./Charts/LineChart";
import LineChart2 from "./Charts/LineChart2";

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
          id="predefine_dashboard"
          cellSpacing={[5, 5]}
          resizeStop={onPanelResize}
          allowResizing={true}
          allowDragging={true}
        >
          <PanelsDirective>
            <PanelDirective
              header=""
              content={LineChart}
              sizeX={1}
              sizeY={3}
              row={0}
              col={0}
            ></PanelDirective>
            <PanelDirective
              header=""
              content={LineChart}
              sizeX={3}
              sizeY={2}
              row={0}
              col={4}
            ></PanelDirective>
            <PanelDirective
              header=""
              content={LineChart}
              sizeX={3}
              sizeY={2}
              row={1}
              col={4}
            ></PanelDirective>
            <PanelDirective
              header=""
              content={LineChart}
              sizeX={1}
              sizeY={3}
              row={2}
              col={0}
            ></PanelDirective>
            <PanelDirective
              header=""
              content={LineChart}
              sizeX={3}
              sizeY={1}
              row={2}
              col={4}
            ></PanelDirective>
          </PanelsDirective>
        </DashboardLayoutComponent>
      </div>
    </div>
  );
};

export default WebDashboard;
