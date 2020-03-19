import React, { useState, useEffect } from "react";
import { getCorporations } from "./api/corporations";

// Next steps:
// 1. Delete via the API
// 2. Support adding a corp
// 3. Set up routing

type Corporation = {
  id: number;
  name: string;
  icon: string;
};

function Corporations() {
  // Must put this in state because we want React to redraw the screen when this data changes.
  const [corporations, setCorporations] = useState<Corporation[]>([]);

  // This runs by default as every render.
  useEffect(() => {
    async function loadCorporations() {
      const corps = await getCorporations();
      setCorporations(corps);
    }
    loadCorporations();
    // 2nd arg is the dependency array. It specifies when this effect should re-run
  }, []);

  function onDeleteClick(id: Number) {
    const newCorporations = corporations.filter(corp => corp.id !== id);
    setCorporations(newCorporations);
  }

  // In React, HTML is a projection of app state
  // NOT a source of truth.
  function renderCorporation(corp: Corporation) {
    return (
      <tr key={corp.id}>
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
