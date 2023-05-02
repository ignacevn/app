import React from "react";
import './PatientProfile.css';

const PatientProfile = () => {
    return (
      <div className="dashboard-panel">
        <h2>Patient Profile</h2>
        <p>Naam: Dirk</p>
        <p>Geboortedatum: 2/05/2023</p>
        <p>Roker: Nee</p>
      </div>
    );
  };

export default PatientProfile;
