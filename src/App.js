import React, { useState, useEffect } from "react";
import "./style.css";
import employees from "./employees";
import Header from "./components/Header";
import EmployeeTable from "./components/EmployeeTable";
import Button from "react-bootstrap/Button";

function App() {
  const [employeesState, setEmployeesState] = useState({
    employees: [...employees],
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    setEmployeesState({ employees: employees });
  }, []);

  const searchEmployees = (query) => {
    const filteredEmployees = employeesState.employees.filter((employee) => {
      console.log(employee)
      return (
        employee.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });
   return filteredEmployees
  };


  const handleSortEmployees = () => {
    const sortEmployees = employeesState.employees.sort((a, b) =>
      a.firstName > b.firstName ? 1 : -1
    );
    setEmployeesState({
      employees: sortEmployees,
    });
  };

  return (
    <div>
      <Header />
      <Button
        className="sortBtn"
        onClick={handleSortEmployees}
        variant="outline-success"
      >
        Sort employees alphabetically{" "}
      </Button>

      <input
        className="nameSearch"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></input>

      <EmployeeTable employees={searchEmployees(search)} />
    </div>
  );
}

export default App;
