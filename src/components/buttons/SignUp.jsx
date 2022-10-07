import React from 'react'
import RegisterForm from '../forms/registerForm'



function SignUp() {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary mx-2" data-bs-toggle="modal" data-bs-target="#RegisterModal">
                Register
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="RegisterModal" tabIndex="-1" aria-labelledby="RegisterModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="RegisterModalLabel">Register</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <RegisterForm />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
