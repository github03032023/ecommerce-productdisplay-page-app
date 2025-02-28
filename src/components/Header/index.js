import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./header.css";
import { useSelector } from "react-redux";
import { Link } from 'react-router';


// Header to display the Cart  

const Header = ({ setSearchQuery }) => {
    // Get cart items count from Redux
    const cartCount = useSelector((state) => {
        return state.cart.totalQuantity;
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">E-Shop </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Home Button  */}
                    <Link to="/" className="btn btn-outline-primary me-3">Home</Link>

                    {/* Align search bar and cart to the right */}
                    <div className="ms-auto d-flex align-items-center">
                        <form className="d-flex me-4">
                            <input
                                className="form-control me-2 w-100"
                                type="search"
                                placeholder="Search Products By Name"
                                aria-label="Search Products"
                                onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                            />

                        </form>
                        {/* Shopping cart icon with cart count */}
                        <div className="cart-container">
                            <Link to="/cart">
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" className="cart-icon" />
                                <span className="cart-counter">{cartCount}</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
