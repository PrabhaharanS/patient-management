import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { login, ROLES } = useAuth();
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role) return;
    login(role);
    navigate(role === ROLES.RECEPTIONIST ? "/reception" : "/doctor");
  };

  return (
    <div className="centered-box">
      <h2>Select Role to Login</h2>
      <form onSubmit={handleSubmit}>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">-- choose role --</option>
          <option value={ROLES.RECEPTIONIST}>Receptionist</option>
          <option value={ROLES.SENIOR}>Senior Doctor</option>
          <option value={ROLES.JUNIOR}>Junior Doctor</option>
        </select>
        <button type="submit" disabled={!role}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
