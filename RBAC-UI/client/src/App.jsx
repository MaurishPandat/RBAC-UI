import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import PermissionManagement from "./components/PermissionManagement";

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-xl">RBAC Admin Dashboard</h1>
        <nav>
          <Link to="/users" className="mr-4">Users</Link>
          <Link to="/roles" className="mr-4">Roles</Link>
          <Link to="/permissions">Permissions</Link>
        </nav>
      </header>
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/users" element={<UserManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
          <Route path="/permissions" element={<PermissionManagement />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
