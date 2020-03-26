import React from 'react'
import '../css/main.scss';
import AboutImg from '../images/rr.jpg';

 const About = () => {
    return (
        <div className="abouts">
            <div className="abouts-info">
                <h1>About YMA</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis, error numquam minus fugit asperiores, adipisci dolorem esse, consequuntur autem neque fuga amet voluptatibus nam libero quod eligendi quas animi facilis!
                A voluptatum est quam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis, error numquam minus fugit asperiores, adipisci dolorem esse, consequuntur autem neque fuga amet voluptatibus nam libero quod eligendi quas animi facilis!
                A voluptatum est quam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis, error numquam minus fugit asperiores, adipisci dolorem esse, consequuntur autem neque fuga amet voluptatibus nam libero quod eligendi quas animi facilis!
                A voluptatum est quam.
                </p>
            </div> 
            <div className="abouts-image">
                <img src = {AboutImg} alt="about" />
            </div>
        </div>
    )
}

export default About;
