import React from "react";
import './Text.css';


const Consultation = ({data}) => {
  const procedures = data.procedures;
  procedures.sort((a, b) => new Date(a.date) - new Date(b.date));

  // zoekt recenste procedure
  const pastProcedures = procedures.filter(procedure => new Date(procedure.date) < new Date());
  const latestProcedure = pastProcedures[pastProcedures.length - 1];

  // zoekt volgende procedure
  const futureProcedures = procedures.filter(procedure => new Date(procedure.date) >= new Date());
  const upcomingProcedure = futureProcedures[0];

  return (
    <div className="dashboard-panel">
      <h2>Previous Consultation</h2>
      {latestProcedure && (
      <div>
        <p>Name: {latestProcedure.name}</p>
        <p>Date: {latestProcedure.date}</p>
      </div>
    )}
    {!latestProcedure && <p>No procedures or consultations found</p>}
      <h2>Next Consultation</h2>
      {upcomingProcedure && (
      <div>
        <p>Name: {upcomingProcedure.name}</p>
        <p>Date: {upcomingProcedure.date}</p>
      </div>
    )}
    {!upcomingProcedure && <p>No upcoming procedures or consultations</p>}
    </div>
    );
  };

export default Consultation;