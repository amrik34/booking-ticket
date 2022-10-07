import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { delItem } from '../redux/actions';

const Cart = () => {
    const state = useSelector((state) => state.addItems);

    const dispatch = useDispatch();
    const handleClose = (item) => {
        // alert(item)
        dispatch(delItem(item));
    }

    const cartItems = (cartItem) => {
        return (
            <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
                <div className='container py-4'>
                    <button className='btn-close float-end' aria-label="Close" onClick={() => handleClose(cartItem)}></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={cartItem.img} alt={cartItem.title} width="200px" />
                        </div>
                        <div className='col-md-8 d-flex align-items-center'>
                            <div>
                                <h3>{cartItem.title}</h3>
                                <p>${cartItem.price}</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
    const emptyCart = () => {
        return (
            <div className='px-4 my-5 bg-light rounded-3'>
                <div className='container py-4'>
                    <div className='row'>
                        <h1>Your cart is rmpty</h1>
                    </div>
                </div>
            </div>
        )
    }
    const proceedBtn = () => {
        return (
            <div className='px-4 my-5'>
                <div className='container py-4'>
                    <div className='row'>
                        <NavLink to='/checkout' className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed to checkout</NavLink>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.addItems !== 0 && state.map(cartItems)}
            {state.addItems !== 0 && proceedBtn()}
        </>
    )
}

export default Cart
