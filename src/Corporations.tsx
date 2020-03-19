import React, { useState } from "react";

type Corporation = {
  id: number;
  name: string;
  icon: string;
};

const defaultCorporations = [
  { id: 1, name: "Apple", icon: "apple.png" },
  { id: 2, name: "IBM", icon: "ibm.png" },
  { id: 3, name: "Amazon", icon: "amazon.png" }
];

function Corporations() {
  // Must put this in state because we want React to redraw the screen when this data changes.
  const [corporations, setCorporations] = useState(defaultCorporations);

  function onDeleteClick(id: Number) {
    const newCorporations = corporations.filter(corp => corp.id !== id);
    setCorporations(newCorporations);
  }

  // In React, HTML is a projection of app state
  // NOT a source of truth.
  function renderCorporation(corp: Corporation) {
    return (
      <tr>
        <td>
          <button onClick={() => onDeleteClick(corp.id)}>Delete</button>
        </td>
        <td>{corp.id}</td>
        <td>{corp.name}</td>
        <td>{corp.icon}</td>
      </tr>
    );
  }

  return (
    <>
      <h1>Corporations</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Icon</th>
          </tr>
        </thead>
        <tbody>{corporations.map(renderCorporation)}</tbody>
      </table>
    </>
  );
}

export default Corporations;
