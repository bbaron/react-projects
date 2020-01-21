import React from "react";
import Employee from "./Employee";

const EmployeeList = props => {
  const employeeList = props.employees.map(emp => (
    <Employee key={emp._links.self.href} employee={emp} />
  ));
  return (
    <table className="ui fixed table">
      <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Description</th>
        </tr>
        {employeeList}
      </tbody>
    </table>
  );
};

export default EmployeeList;
