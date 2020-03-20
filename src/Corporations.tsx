import React, { useState, useEffect } from "react";
import {
  getCorporations,
  deleteCorporation,
  addCorporation
} from "./api/corporationsApi";
import Spinner from "./shared/Spinner";

const newCorp = {
  name: "",
  icon: ""
};

function Corporations() {
  const [isLoading, setIsLoading] = useState(true);
  // Array of Corporation IDs currently being deleted.
  const [isDeleting, setIsDeleting] = useState<Number[]>([]);
  const [corporations, setCorporations] = useState<Corporation[]>([]);
  const [corporation, setCorporation] = useState<AddCorporationRequest>(
    newCorp
  );

  // This runs by default as every render.
  useEffect(() => {
    async function loadCorporations() {
      const corps = await getCorporations();
      setCorporations(corps);
      setIsLoading(false);
    }
    loadCorporations();
    // 2nd arg is the dependency array. It specifies when this effect should re-run
  }, []);

  async function onDeleteClick(id: Number) {
    setIsDeleting(currentState => [...currentState, id]);
    await deleteCorporation(id);
    const newCorporations = corporations.filter(corp => corp.id !== id);
    setCorporations(newCorporations);
    setIsDeleting(currentState => currentState.filter(v => v !== id));
  }

  async function onAddCorporation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent the form from posting back to the server.
    const savedCorporation = await addCorporation(corporation);
    setCorporations([...corporations, savedCorporation]);
    setCorporation(newCorp); // Reset the form
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCorporation({ ...corporation, [event.target.id]: event.target.value });
  }

  // In React, HTML is a projection of app state
  // NOT a source of truth.
  function renderCorporation(corp: Corporation) {
    const deleteInProgress = isDeleting.some(v => v === corp.id);
    return (
      <tr key={corp.id}>
        <td>
          <button
            disabled={deleteInProgress}
            aria-label={`Delete ${corp.name}`}
            onClick={() => onDeleteClick(corp.id)}
          >
            Delete {deleteInProgress && <Spinner size="small" />}
          </button>
        </td>
        <td>{corp.id}</td>
        <td>{corp.name}</td>
        <td>{corp.icon}</td>
      </tr>
    );
  }

  function renderTable() {
    if (isLoading) return <Spinner size="large" />;
    return (
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
    );
  }

  // Options:
  // 1. Form validation
  // 2. Create reusable Input component
  // 3. Routing (new dedicated edit page)
  // 4. loading state (spinners/preloader)
  // 5. Error handling
  return (
    <>
      <h1>Corporations</h1>
      <section>
        <h2>Add User</h2>
        <form onSubmit={onAddCorporation}>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input id="name" value={corporation.name} onChange={onChange} />
          </div>
          <div>
            <label htmlFor="icon">Icon</label>
            <br />
            <input id="icon" value={corporation.icon} onChange={onChange} />
          </div>
          <input type="submit" value="Add Corporation" />
        </form>
      </section>

      {renderTable()}
    </>
  );
}

export default Corporations;
