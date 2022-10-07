import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function CartBtn() {
    // we got a state of addItems
    const cartQty = useSelector(state => state.addItems);

    return (
        <>
            <NavLink to='/cart' className='btn btn-outline-primary'>cart ({cartQty.length})</NavLink>
        </>
    )
}

export default CartBtn
