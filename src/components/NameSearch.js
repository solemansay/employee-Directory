import React from "react";
import { InputGroup, FormControl, Button, Container, Row, Col} from "react-bootstrap";
// import Container from "react-bootstrap/Container";

const NameSearch = () => {
const [filter, filterSet] = React.useState("");

  return (
    <Container>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search by first name"
              aria-label="Search by first name"
              aria-describedby="basic-addon2"
              value={filter} 
              onChange={(evt) => filterSet(evt.target.value)}
            />
            <InputGroup.Append>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default NameSearch;
