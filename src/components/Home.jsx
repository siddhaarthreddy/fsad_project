import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import food1 from '../Images/food1.jpeg';
import food2 from '../Images/food2.jpeg';
import food3 from '../Images/food3.jpeg';
import Topmeals from './Topmeals';
import Restaurants from './Restaurants';

function Home() {
    const [cartItems, setCartItems] = useState([]);
    const [userInitial, setUserInitial] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) setCartItems(JSON.parse(savedCart));
        
        const initial = localStorage.getItem('userInitial');
        if (initial) setUserInitial(initial);
    }, []);

    const handleUserIconClick = () => {
        if (userInitial) {
            // Logout logic
            localStorage.removeItem('user');
            localStorage.removeItem('userInitial');
            setUserInitial('');
            alert('Logged out successfully!');
        } else {
            // Navigate to login page
            navigate('/login');
        }
    };

    const getCartCount = () => cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <nav className="navbar" style={{
               backgroundColor: '#B02A2A',
                padding: '10px 20px'
            }}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.5rem'
                    }}>Click2Eat</a>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-light me-2" type="submit">
                            Search
                        </button>
                        <Link to="/restaurants" className="btn btn-danger me-2">
                            Restaurants
                        </Link>
                        <div 
                            onClick={handleUserIconClick}
                            style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                marginRight: '8px'
                            }}
                        >
                            {userInitial ? (
                                <span style={{
                                    color: '#dc3545',
                                    fontWeight: 'bold',
                                    fontSize: '18px',
                                    lineHeight: '1'
                                }}>{userInitial}</span>
                            ) : (
                                <span className="material-symbols-outlined" style={{
                                    color: '#dc3545',
                                    fontSize: '20px'
                                }}>person</span>
                            )}
                        </div>
                        <div style={{ position: 'relative', marginLeft: '8px' }}>
                            <Link to="/cart" className="btn btn-link" style={{ padding: 0, color: 'white' }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                                    shopping_cart
                                </span>
                                {getCartCount() > 0 && (
                                    <span style={{
                                        position: 'absolute',
                                        top: '-5px',
                                        right: '-5px',
                                        backgroundColor: '#dc3545',
                                        color: 'white',
                                        borderRadius: '50%',
                                        width: '20px',
                                        height: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px'
                                    }}>
                                        {getCartCount()}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </form>
                </div>
            </nav>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            {/* Rest of your Home component remains the same */}
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="1000"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={food1} className="d-block w-100" alt="Food 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={food2} className="d-block w-100" alt="Food 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={food3} className="d-block w-100" alt="Food 3" />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <Topmeals />
                <Restaurants />
            </div>
        </>
    );
}

export default Home;