import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import TableData from "./TableData";
import Container from "react-bootstrap/Container";

const EmployeeTable = ({ employees }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Table striped bordered hover variant="dark">
            <thead className="">
              <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Email</th>
                <th>Phone-Number</th>
              </tr>
            </thead>
            <TableData employees={employees} />
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeTable;
