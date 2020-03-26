import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

const Failure = () => {
    const [show, setShow] = useState(true);

    const user = useSelector(state => state.user);

    console.log(user);

    return (
      <>
      <br/>
      <br/>
      <br/>
      <br/>
        <Alert show={show} variant="danger">
    <Alert.Heading>{user.errors.data.message}</Alert.Heading>
          <p>
            Try Again!.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
             Go back
            </Button>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}

        <br/>
        <br/>
        <br/>
        <br/>
      </>
   
    );
  }


export default Failure;