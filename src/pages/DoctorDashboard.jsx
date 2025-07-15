import React from "react";
import { Link } from "react-router-dom";
import { usePatients } from "../context/PatientContext";
import PatientTable from "../components/PatientTable";

const DoctorDashboard = () => {
  const { patients } = usePatients();

  return (
    <section className="page">
      <h2>Doctor ‑ Patients</h2>
      <PatientTable patients={patients} canEdit={false} />
      <p className="info">Click a patient row to view / add notes.</p>
      {patients.length === 0 && (
        <p>No patients yet. Ask reception to add some.</p>
      )}
      <ul className="patient-links">
        {patients.map((p) => (
          <li key={p.id}>
            <Link to={`/doctor/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DoctorDashboard;
