import { Button, Container, Form } from 'react-bootstrap';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase-config';
import { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';




export const LoginForm = () => {
    // const dispatch = useDispatch();
    const [loginEmail, setLoginEmail] = useState();
    const [loginPassword, setLoginPassword] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [logedInDetail, setLogedInDetail] = useState({});

    const [show, setShow] = useState(false);





    // const loginForm = document.querySelector('login-form')
    const login = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            setIsLoggedIn(true);
            console.log(loginEmail, 'value');
            console.log(user.email, 'user email');
            console.log(user, 'user');
            // onAuthStateChanged(auth, (currentUser) => {
            //     console.log(currentUser, 'currentUser');
            //     if (loginEmail === user.email) {
            //         console.log('vaild user')
            //     }
            //     else {
            //         console.log('invaild user')
            //     }

            // });

            setShow(false);
            // console.log(show)
            // dispatch(loggedin(logedInDetail));
            login.querySelector('.error').innerHTML = ""
        } catch (error) {
            console.log(error.message)
            setIsLoggedIn(false);
            login.querySelector('.error').innerHTML = error.message

        }

    }

    return (
        <Container fluid="md" className='py-3 w-100'>
            <Form onSubmit={login} id="login-form">
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setLoginEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" className='btn w-100 mt-2 mb-3'>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

