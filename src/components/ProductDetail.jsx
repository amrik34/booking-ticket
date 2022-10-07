import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { DATA } from '../Data';
import { addItem, delItem } from '../redux/actions'

function ProductDetail() {
    const [btntext, setBtntext] = useState("Add  to cart");
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id)
    const product = proDetail[0];
    const dispatch = useDispatch();
    // console.log(product)
    const handleCart = (product) => {
        if (btntext === "Add  to cart") {
            dispatch(addItem(product))
            setBtntext('Remove from cart')
        }
        else {
            dispatch(delItem(product))
            setBtntext("Add  to cart")

        }
    }
    return (
        <>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-6 px-5'>
                        <img src={product.img} alt={product.title} style={{ maxWidth: '100%' }} />
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h1 className='dispalay-5 fw-bold'>{product.title}</h1>
                        <hr />
                        <h2 className='my-4'>$ {product.price}</h2>
                        <p className='lead'>{product.desc}</p>
                        <NavLink onClick={() => handleCart(product)} className="btn btn-outline-primary my-2">{btntext}</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
