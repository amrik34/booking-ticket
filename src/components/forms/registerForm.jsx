import { Button, Container, Form } from 'react-bootstrap';
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase-config';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/actions/userAction'



function RegisterForm() {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: ""
    });
    const [errMsg, setErrMsg] = useState('');
    const [submitBtnDisabled, setsubmitBtnDisabled] = useState(false);
    const navigate = useNavigate()
    const singup = async (e) => {
        e.preventDefault();
        if (!values.name || !values.email || !values.pass) {
            setErrMsg("Please fill fields")
            return;
        }
        setErrMsg("");
        dispatch(addUser(values))
        setsubmitBtnDisabled(true)
        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (resp) => {
                setsubmitBtnDisabled(false)
                const user = resp.user;
                // console.log(user);
                await updateProfile(user,
                    {
                        displayName: values.name,
                    });
                navigate('/')


            }).catch((err) => {
                console.log("Error:", err)
                setErrMsg(err.message)
            })
    }
    useEffect(() => {

        onAuthStateChanged(auth, (currentUser) => {  // broser hack doubt
            console.log(currentUser, "currentUser", 'values', values)
            dispatch(addUser(values))
            // if (currentUser !== null) {
            //     console.log('user looged in as', currentUser.displayName)
            //     setIsLoggedIn(true)
            // }
            // else {
            //     console.log('user not looged in')
            //     setIsLoggedIn(false)
            // }
        })
    }, [])
    return (
        <Container fluid="md" className=''>
            <p style={{ color: "red" }}>{errMsg}</p>
            <Form>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"
                        onChange={(e) =>
                            setValues((prev) => ({ ...prev, name: e.target.value }))} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        onChange={(e) =>
                            setValues((prev) => ({ ...prev, email: e.target.value }))}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        onChange={(e) =>
                            setValues((prev) => ({ ...prev, pass: e.target.value }))}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={submitBtnDisabled} onClick={singup}>
                    Sign up
                </Button>
                <p className='py-3'>
                    Already have an account <Link to='/'>Sign in</Link>
                </p>
            </Form>
        </Container>
    );
}

export default RegisterForm;