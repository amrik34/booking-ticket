import { Button } from 'react-bootstrap';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase-config';
import { useState } from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';







export const Logout = () => {
    const [user, setUser] = useState({});
    const [logedIn, setlogedIn] = useState(false);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setlogedIn(true)
    });

    const signout = async (e) => {
        e.preventDefault();
        signOut(auth);
        if (logedIn) {
            setlogedIn(false)
        }
    }
    // useEffect(() => {
    //     console.log(user)
    // }, [])
    return (

        <div>
            {/* <Button variant="primary" type="submit" className='btn-outline-primary' data-bs-toggle="modal" data-bs-target="#LoginModal" onClick={signout} >
                Login
            </Button > */}

            <button type="button" className="btn btn-outline-primary" onClick={signout} >
                Logout
            </button>
        </div>
    );
}


