export async function getCorporations() {
  const resp = await fetch("http://localhost:3001/corporations");
  if (resp.ok) {
    const json = await resp.json();
    return json;
  }
  throw new Error("Bad network response");
}

export async function deleteCorporation(id: Number) {
  const resp = await fetch("http://localhost:3001/corporations/" + id, {
    method: "DELETE"
  });
  if (resp.ok) {
    const json = await resp.json();
    return json;
  }
  throw new Error("Bad network response");
}

export async function addCorporation(corporation: AddCorporationRequest) {
  const resp = await fetch("http://localhost:3001/corporations/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(corporation)
  });
  if (resp.ok) {
    const json = await resp.json();
    return json;
  }
  throw new Error("Bad network response");
}
