import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePatients } from "../context/PatientContext";

const emptyPatient = {
  name: "",
  phone: "",
  dob: "",
  address: "",
};

const PatientForm = () => {
  const { patients, addPatient, updatePatient } = usePatients();
  const { id } = useParams();
  const editing = Boolean(id);
  const [form, setForm] = useState(emptyPatient);
  const navigate = useNavigate();

  useEffect(() => {
    if (editing) {
      const existing = patients.find((p) => p.id === id);
      if (existing) setForm(existing);
    }
  }, [editing, id, patients]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    editing ? updatePatient(id, form) : addPatient(form);
    navigate("/reception");
  };

  return (
    <section className="page">
      <h2>{editing ? "Edit Patient" : "Add Patient"}</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        {["name", "phone", "dob", "address"].map((field) => (
          <label key={field}>
            {field.toUpperCase()}
            <input
              name={field}
              value={form[field]}
              onChange={handleChange}
              required
            />
          </label>
        ))}
        <button type="submit" className="btn">
          {editing ? "Update" : "Add"}
        </button>
      </form>
    </section>
  );
};

export default PatientForm;
