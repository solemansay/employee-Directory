import React from "react";

const TableData = ({ employees }) => {
  return (
    <tbody>
      {employees.map((employee) => (
        <tr key= {employee.id}>
          <td>{employee.id}</td>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.position}</td>
          <td>{employee.email}</td>
          <td>{employee.phoneNumber}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;
