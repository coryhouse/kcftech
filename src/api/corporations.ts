export async function getCorporations() {
  const resp = await fetch("http://localhost:3001/corporations");
  if (resp.ok) {
    const json = await resp.json();
    return json;
  }
  throw new Error("Bad network response");
}
