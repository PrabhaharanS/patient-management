import React from "react";
import { Link } from "react-router-dom";
import { usePatients } from "../context/PatientContext";
import PatientTable from "../components/PatientTable";

const ReceptionistDashboard = () => {
  const { patients } = usePatients();

  return (
    <section className="page">
      <header className="page-header">
        <h2>Reception ‑ Patients</h2>
        <Link to="/reception/new" className="btn">
          + Add Patient
        </Link>
      </header>
      <PatientTable patients={patients} canEdit />
    </section>
  );
};

export default ReceptionistDashboard;
