import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap'

const Header = (props) => {
    return (
<Jumbotron fluid>
  <Container>
    <h1>Employee Directory</h1>
    <p>
    Use the table bellow to view your entire employee directory 
    at once so that you have quick access to their information.
    </p>
  </Container>
</Jumbotron>
    )
}

export default Header;