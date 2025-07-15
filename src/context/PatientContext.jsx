import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem("pm_patients");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("pm_patients", JSON.stringify(patients));
  }, [patients]);

  const addPatient = (p) =>
    setPatients((prev) => [...prev, { ...p, id: uuid(), notes: [] }]);

  const updatePatient = (id, data) =>
    setPatients((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...data } : p))
    );

  const addNote = (id, note) =>
    setPatients((prev) =>
      prev.map((p) => (p.id === id ? { ...p, notes: [...p.notes, note] } : p))
    );

  return (
    <PatientContext.Provider
      value={{ patients, addPatient, updatePatient, addNote }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export const usePatients = () => useContext(PatientContext);
