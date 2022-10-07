import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { auth } from '../../firebase-config'
import { LoginForm } from '../forms/loginForm'
import { Logout } from '../forms/signOut'


function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        setIsLoggedIn(false)
    })
    // useEffect(() => {
    //     onAuthStateChanged(auth, (currentUser) => {  
    //         console.log(currentUser, "currentUser")
    //         if (currentUser !== null) {
    //             console.log('user looged in as', currentUser.displayName)
    //             setIsLoggedIn(true)
    //         }
    //         else {
    //             console.log('user not looged in')
    //             setIsLoggedIn(false)
    //         }
    //     })
    // }, [])
    return (
        <>

            {/* <!-- Button trigger modal --> */}
            {!isLoggedIn ? (
                <>
                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#LoginModal">
                        Login
                    </button>
                </>
            ) : (
                <><Logout /></>
            )

            }



            {/* <!-- Modal --> */}
            <div className="modal fade" id="LoginModal" tabIndex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="LoginModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="true" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login

