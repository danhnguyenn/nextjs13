export async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error(res.statusText);

  const users = await res.json();

  return users;
}
