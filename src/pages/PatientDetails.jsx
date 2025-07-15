import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePatients } from "../context/PatientContext";
import { useAuth } from "../context/AuthContext";

const PatientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { patients, addNote } = usePatients();
  const { user } = useAuth();
  const patient = patients.find((p) => p.id === id);
  const [note, setNote] = useState("");

  if (!patient) return <p>Patient not found.</p>;

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!note.trim()) return;
    addNote(id, {
      author: user.role,
      date: new Date().toLocaleString(),
      text: note.trim(),
    });
    setNote("");
  };

  return (
    <section className="page">
      <button onClick={() => navigate(-1)} className="btn sm">
        ← Back
      </button>
      <h2>{patient.name}</h2>
      <p>
        <strong>Phone:</strong> {patient.phone}
      </p>
      <p>
        <strong>DOB:</strong> {patient.dob}
      </p>
      <p>
        <strong>Address:</strong> {patient.address}
      </p>

      <hr />

      <h3>Medical Notes</h3>
      {patient.notes.length === 0 && <p>No notes yet.</p>}
      <ul className="notes-list">
        {patient.notes.map((n, i) => (
          <li key={i}>
            <em>{n.date}</em> • <strong>{n.author}</strong>
            <br />
            {n.text}
          </li>
        ))}
      </ul>

      <form onSubmit={handleAddNote} className="note-form">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add new note..."
          required
        />
        <button type="submit" className="btn">
          Add Note
        </button>
      </form>
    </section>
  );
};

export default PatientDetails;
