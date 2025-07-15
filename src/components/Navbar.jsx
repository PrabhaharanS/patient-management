import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <nav className="nav">
      <strong>Patient System</strong>
      <span className="spacer" />
      {user.role === "receptionist" && <Link to="/reception">Patients</Link>}
      {(user.role === "senior" || user.role === "junior") && (
        <Link to="/doctor">Patients</Link>
      )}
      <button onClick={logout} className="logout-btn">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
