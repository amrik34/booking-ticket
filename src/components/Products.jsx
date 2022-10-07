import React from 'react';
import { Link } from 'react-router-dom';
import { DATA } from '../Data'


function Products() {
    const cardItem = (item) => {
        return (

            <div className="card my-5 py-4 text-center" key={item.id} style={{ width: "18em" }} >
                <img src={item.img} className="card-img-top" alt={item.title} height="200px" />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: "60px" }}>{item.title}</h5>
                    <p className="lead">$ {item.price}</p>
                    <Link to={`/products/${item.id}`} className="btn btn-primary">Add to cart</Link>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className='container py-5'>
                <h2 className='text-center'>Products</h2>
                <hr />
            </div>
            <div className='container py-5'>
                <div className='row justify-content-between'>
                    {DATA.map(cardItem)}
                </div>
            </div>
        </>
    )
}

export default Products
