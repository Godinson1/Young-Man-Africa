import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

const Success = () => {
    const [show, setShow] = useState(true);

    const user = useSelector(state => state.user);

    console.log(user);

    return (
      <>
      <br/>
      <br/>
      <br/>
      <br/>
        <Alert show={show} variant="success">
    <Alert.Heading>Hey {user.details.data.fname}.</Alert.Heading>
          <p>
           Your Registration to the Young Man Africa Scheme was Successful.
           Kindly Check your email address for subsequent information..
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


export default Success;