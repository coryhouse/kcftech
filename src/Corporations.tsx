import React from "react";

type Corporation = {
  id: number;
  name: string;
  icon: string;
};

function Corporations() {
  const corporations = [
    { id: 1, name: "Apple", icon: "apple.png" },
    { id: 2, name: "IBM", icon: "ibm.png" },
    { id: 3, name: "Amazon", icon: "amazon.png" }
  ];

  function renderCorporation(corp: Corporation) {
    return (
      <tr>
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
