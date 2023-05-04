import React from "react";
import './Text.css';
import data from "./Data2.json"

const PatientProfile = () => {
    return (
      <div className="dashboard-panel">
        <h2>Patient Profile</h2>
        <p>Naam: Dirk</p>
        <p>Geboortedatum: 2/05/2023</p>
        <p>Roker: {data.smoking}</p>
      </div>
    );
  };

export default PatientProfile;
