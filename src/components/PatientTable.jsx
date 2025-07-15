import React from "react";
import { Link } from "react-router-dom";

const PatientTable = ({ patients, canEdit }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>DOB</th>
        {canEdit && <th>Actions</th>}
      </tr>
    </thead>
    <tbody>
      {patients.map((p) => (
        <tr key={p.id}>
          <td>{p.name}</td>
          <td>{p.phone}</td>
          <td>{p.dob}</td>
          {canEdit && (
            <td>
              <Link to={`/reception/edit/${p.id}`}>Edit</Link>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

export default PatientTable;
