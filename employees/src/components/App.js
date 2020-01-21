import React from "react";
import employeeApi from "../apis/employees";
import EmployeeList from "./EmployeeList";

class App extends React.Component {
  state = { employees: [] };

  fetchEmployees = async () => {
    const response = await employeeApi.get("/employees");
    // console.log("response", response.data._embedded.employees);
    this.setState({ employees: response.data._embedded.employees });
  };

  componentDidMount() {
    this.fetchEmployees();
  }

  render() {
    return (
      <div className="ui container">
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
