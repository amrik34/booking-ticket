import React from 'react';
import contactus from '../assets/images/contact-us.png'

function Contact() {
    return (
        <>
            <div className='container p-5'>
                <h1 className='text-center'>Contact us </h1>
                <hr />
                <div className='row'>
                    <div className='col-md-5  '>
                        <img src={contactus} alt="contactus" />
                    </div>
                    <div className='col-md-6 py-5 px-5'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="Firstname" className="form-label">Firstname</label>
                                <input type="email" className="form-control" id="Firstname" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="Lastname" className="form-label">Lastname</label>
                                <input type="text" className="form-control" id="Lastname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Email" className="form-label">Email</label>
                                <input type="text" className="form-control" id="Email" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="Message" className="form-label">Message</label>
                                <textarea rows="5" cols="4" className="form-control" id="Message" />
                            </div>

                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
