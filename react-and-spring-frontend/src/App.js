import React from 'react';
import './App.css';
const client = require('./client');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {employees: []}
  }

  componentDidMount() {
    client({method: 'GET', path: 'http://localhost:3000/api/employees'}).done(response => {
      this.setState({employees: response.entity._embedded.employees});
    });
  }

  render() {
    return (
      <EmployeeList employees={this.state.employees}/>
    )
  }
}

class EmployeeList extends React.Component {
  render() {
    const employees = this.props.employees.map(employee =>
      <Employee key={employee._links.self.href} employee={employee}/>
    );
    return (
      <table>
        <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Description</th>
          {employees}
        </tr>
        </tbody>
      </table>
    );
  }
}

class Employee extends React.Component {
  render() {
    const e = this.props.employee;
    return (
      <tr>
        <td>{e.firstName}</td>
        <td>{e.firstName}</td>
        <td>{e.description}</td>
      </tr>
    );
  }
}

export default App;
