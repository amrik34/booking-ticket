import React from 'react';
import s1 from '../assets/images/home/hollywood-movies.jpg';
import s2 from '../assets/images/home/best-action-movies.jpg';
import s3 from '../assets/images/home/l-intro.jpg';
import Products from './Products';

function Home() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner w-100" >
                    <div className="carousel-item active">
                        <img src={s1} className="d-block w-100" style={{ height: "500px" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={s2} className="d-block w-100" style={{ height: "500px" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={s3} className="d-block w-100" style={{ height: "500px" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Products />
        </>
    )
}

export default Home
