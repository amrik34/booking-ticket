import React from 'react'
import { NavLink } from 'react-router-dom';
import Aboutus from '../assets/images/about-us.png';

function About() {
    return (
        <>
            <div className='container py-5 my-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                        <p className='lead mb-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <NavLink to="/contact" className="btn btn-outline-primary">Contact us</NavLink>
                    </div>
                    <div className='col-md-6 px-5'>
                        <img src={Aboutus} alt="about us" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
