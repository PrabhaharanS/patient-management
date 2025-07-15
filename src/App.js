import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import ReceptionistDashboard from "./pages/ReceptionistDashboard";
import PatientForm from "./pages/PatientForm";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDetails from "./pages/PatientDetails";
import RoleBasedRoute from "./components/RoleBasedRoute";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { ROLES } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        {/* Public */}
        <Route path="/" element={<LoginPage />} />

        {/* Receptionist only */}
        <Route element={<RoleBasedRoute allowed={[ROLES.RECEPTIONIST]} />}>
          <Route path="/reception" element={<ReceptionistDashboard />} />
          <Route path="/reception/new" element={<PatientForm />} />
          <Route path="/reception/edit/:id" element={<PatientForm />} />
        </Route>

        {/* Doctors (senior & junior) */}
        <Route
          element={
            <RoleBasedRoute allowed={[ROLES.SENIOR, ROLES.JUNIOR]} />
          }
        >
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/doctor/:id" element={<PatientDetails />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
