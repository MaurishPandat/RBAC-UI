const BASE_URL = "http://localhost:5002/api";

 // Set the base URL

export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

export const fetchRoles = async () => {
  const response = await fetch(`${BASE_URL}/roles`);
  if (!response.ok) {
    throw new Error("Failed to fetch roles");
  }
  return response.json();
};

export const createUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error("Failed to create user");
  }
  return response.json();
};

export const createRole = async (roleData) => {
  const response = await fetch(`${BASE_URL}/roles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(roleData),
  });
  if (!response.ok) {
    throw new Error("Failed to create role");
  }
  return response.json();
};
