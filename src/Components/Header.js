import React from 'react';
import '../css/main.scss';
import { Jumbotron, Button } from 'react-bootstrap';

const Header = () => {
  
    return (
        <Jumbotron style={{ backgroundColor: "#01530c", paddingTop: "70", height: "650px", color: "white", marginBottom: "0" }}>
        <h1 style={{  marginTop: "160px", fontSize: "100px", marginLeft: "50px", lineHeight: "100px" }}>Young Man Africa</h1>
        <p style={{ marginLeft: "70px" }}>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p style={{ marginLeft: "70px" }}>
          <Button variant="warning">Register</Button>
        </p>
      </Jumbotron>
         );
}

export default Header;