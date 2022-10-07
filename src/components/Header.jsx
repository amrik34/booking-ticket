import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import SignUp from './buttons/SignUp'

function Header() {
    const state = useSelector(state => state.userDetails);
    const cartQty = useSelector(state => state.addItems);
    console.log(cartQty, 'additem');
    console.log(state, "userDetails");
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
                <Link className="navbar-brand" to='/'>Ticket Mart</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home New</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/products'>Proucts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contact'>Contact</Link>
                        </li>
                    </ul>
                    <div className='d-flex '>
                        <Login />
                        <SignUp />
                        <CartBtn />

                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header
