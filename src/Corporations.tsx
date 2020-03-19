import React from "react";

function Corporations() {
  const corporations = [
    { id: 1, name: "Apple", icon: "apple.png" },
    { id: 2, name: "IBM", icon: "ibm.png" },
    { id: 3, name: "Amazon", icon: "amazon.png" }
  ];

  return (
    <>
      <h1>Corporations</h1>
      <ul>
        {corporations.map(corp => {
          return <li>{corp.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Corporations;
