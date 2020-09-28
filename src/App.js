import React, { useState, useEffect } from "react";
import "./style.css";
import employees from "./employees";
import Header from "./components/Header";
import EmployeeTable from "./components/EmployeeTable";
import Button from "react-bootstrap/Button";
// import { InputGroup, FormControl, Container, Row, Col} from "react-bootstrap";
import NameSearch from "./components/NameSearch";

function App() {
  const [employeesState, setEmployeesState, filteredEmployees] = useState({
    employees: [...employees],
  });

  // useEffect(() => {
  //   setEmployeesState({ employees: employees });
  // });

  // const searchEmployees = (query) => {
  //   const filteredEmployees = employeesState.employees.filter((employee) => {
  //     return employee.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  //   });
  //   return filteredEmployees;
  // };

  // };
  
  const FilterDoctors = () => {
    
    for (let i = 0; i < employees.length; i++)
    console.log(employees[i].position)
    //   if(employees[i].position === "Doctor"){

    // }  
    

    // filteredEmployees({
    //   employees: employeesLeft,
    // });
  }


  const handleSortEmployees = () => {

    const sortEmployees = employeesState.employees.sort((a, b) =>
      a.firstName > b.firstName ? 1 : -1,
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

      {/* <NameSearch/> */}

      <Button className="FilterBtn"
        onClick={FilterDoctors}
        variant="outline-success">
          Filter out Doctors </Button>
      

      <EmployeeTable employees={employeesState.employees} 

      />
    </div>
  );
}

export default App;
