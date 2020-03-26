import React,  { useState } from 'react';
import blogImage from '../images/ff.jpg'
import contactImage from '../images/man.webp';
import { Jumbotron, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import aboutImage from '../images/rr.jpg';
import { registerUser } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';


const Main = (props) => {

    const dispatch = useDispatch();
    const error = useSelector(state => state.user);

    const [modalShow, setModalShow] = useState(false);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [sex, setSex] = useState('');
    const [mode, setMode] = useState('');
    const [school, setSchool] = useState('');

    const handleFname = (e) => {
        setFname(e.target.value)
    }

    const handleLname = (e) => {
        setLname(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    
    const handleMode = (e) => {
        setMode(e.target.value)
    }

    const handleSex = (e) => {
        setSex(e.target.value)
    }

    const handleSchool = (e) => {
        setSchool(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            fname,
            lname,
            school,
            mode,
            sex,
            email,
            phone
        }
        console.log(userData);
        dispatch(registerUser(userData, props.history));
    }
     
    return (
        <div>
            <Header />
                    <div className="about">  
                    <Row>
                    <Col sm={8}>
                    <h1 className="about-h1">About YMA</h1>
                    <p className="about-p">
                    lorem3sjcjnlorelorem3sjcjnlorelorem3sjcjnlorelore
                    m3sjcjnlorelorem3sjcjnlorelorem3sjcjnlorelorem3sjcjnlor
                    lorem3sjcjnlorelorem3sjcjnlorelorem3sjcjnlorelorem3sjcjnlore
                    lorem3sjcjnlorelorem3sjcjnlorelorem3sjcjnlorelorem3sjcjnlore
                    lorem3sjcjnlorelorem3sjcjnlorelorem3sjcjnlorelorem3sjcjnlore
                    </p>
                    </Col>
                    <Col sm={4}>
                    <div className="about-img">
                    <img src={aboutImage} alt="about" />
                    </div>
                    </Col>
                    </Row>
                    </div>
                    <Jumbotron style={{ alignContent: "center", marginBottom: "0" }}>
                    <Jumbotron className="reg">
                        <div >
                    <Form onSubmit={handleSubmit}> 
                        <h1 className="form-h1">Register Here..</h1>
                        <Form.Group controlId="fname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Enter first name" value={fname} onChange={handleFname} required/>
                        </Form.Group>
                        <Form.Group controlId="lname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Enter last name" value={lname} onChange={handleLname} required/>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control size="sm" type="email" placeholder="name@example.com" value={email} onChange={handleEmail} required/>
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control size="sm" type="number" placeholder="Enter Phone Number" value={phone} onChange={handlePhone} required/>
                        </Form.Group>
                        <Form.Group controlId="sex">
                            <Form.Label>Sex</Form.Label>
                            <Form.Control size="sm" as="select" value={sex} onChange={handleSex}>
                            <option>Male</option>
                            <option>Female</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="mode">
                            <Form.Label>Mode</Form.Label>
                            <Form.Control size="sm" as="select" value={mode} onChange={handleMode}>
                            <option>Select Mode</option>
                            <option>Student</option>
                            <option>Volunteer</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="school">
                            <Form.Label>School</Form.Label>
                            <Form.Control size="sm" as="select" value={school} onChange={handleSchool}>
                            <option>Select School</option>
                            <option>School 1</option>
                            <option>School 2</option>
                            <option>School 3</option>
                            <option>School 4</option>
                            <option>School 5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                        <Button className="btn-texts" style={{background: "yellow", color: "black"}} type="submit">Register</Button>
                        </Form.Group> 
                    </Form>
                    </div>
                    </Jumbotron>
                    </Jumbotron>
                    </div>
    )
}

export default Main;