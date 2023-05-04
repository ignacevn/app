import React from "react";
import './Text.css';
import data from "./Data2.json"

const OtherHealth = () => {
  return (
    <div className="dashboard-panel">
      <h2>Other health issues</h2>
      {data.Allergy.length > 0 && (
        <div>
          <h3>Allergy:</h3>
          <ul>
            {data.Allergy.map((allergy, index) => (
              <li key={index}>
                Allergic to {allergy.agent}, with reaction: {allergy.reaction}
              </li>
            ))}
          </ul>
        </div>
        )},
        {data.FamilyHistory.length > 0 && (
          <div>
            <h3>Family History:</h3>
            <ul>
              {data.FamilyHistory.map((history, index) => (
                <li key={index}>
                  {history.text}
                </li>
              ))}
            </ul>
          </div>
        )},
    </div>
)
};

export default OtherHealth;