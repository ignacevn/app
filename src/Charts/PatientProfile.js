import React from "react";
import './Text.css';
import data from "./Data2.json"

const PatientProfile = () => {
    return (
      <div className="dashboard-panel">
        <h2>Patient Profile</h2>
        <p>Name: Dirk</p>
        <p>Date of birth: 2/05/2023</p>
        <p>Smoker: {data.smoking}</p>
      </div>
    );
  };

export default PatientProfile;
