import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const ROLES = {
  RECEPTIONIST: "receptionist",
  SENIOR: "senior",
  JUNIOR: "junior",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("pm_user")) || null
  );

  useEffect(() => {
    user
      ? localStorage.setItem("pm_user", JSON.stringify(user))
      : localStorage.removeItem("pm_user");
  }, [user]);

  const login = (role) => setUser({ role });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, ROLES }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
