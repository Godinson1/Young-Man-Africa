import React from 'react';
import {Row, Col, Jumbotron} from 'react-bootstrap';

const Footer = () => {
    return (
       
        <Jumbotron style={{ background: "black", color: "white", marginBottom: "0" }}>
            <Row>
            <Col>
            <div className="footer-contact">
                <p>Email Address: youngmanafrica@gmail.com</p><br/>
                <p>Telephone: +234-8023430403</p>
            </div>
            </Col>
            <Col>
            <div className="newsletter">
                <form>
                    <h2>Subscribe to our newsletter..</h2>
                    <input type="text" placeholder="Enter your email address"/>
                    <button className="btn-text">Subscribe</button>
                </form>
            </div>
            </Col>
            </Row>
            <p id="base-footer">Young man Africa - &copy; 2020</p>
        </Jumbotron>
        
    )
}

export default Footer;
