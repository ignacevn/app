import React from "react";
import './Text.css';
import data from "./Data2.json"

const OtherHealth = () => {
  return (
    <div className="dashboard-panel">
      <h2>Other health issues</h2>
      {data.Allergie.length > 0 && (
        <div>
          <h3>Allergy:</h3>
          <ul>
            {data.Allergie.map((allergy, index) => (
              <li key={index}>
                Allergic to {allergy.agent}, with reaction: {allergy.reaction}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default OtherHealth;