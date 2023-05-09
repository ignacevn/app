import React from "react";
import './Text.css';


const PatientProfile = ({data}) => {
    return (
      <div className="dashboard-panel">
        <h2>Patient Profile</h2>
        <p>Name: {data.name}</p>
        <p>Date of birth: {data.date}</p>
        <p>Smoker: {data.smoking}</p>
      </div>
    );
  };

export default PatientProfile;
