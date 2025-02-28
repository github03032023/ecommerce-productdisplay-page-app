import React from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

// Product Card Component which provides the product details displayed in a card sructure
const ProductCard = ({ productId, productName, image, price, category, description }) => {
// Redux Settings
const dispatch = useDispatch();

const handleAddToCart = () => {
    const product = {productId, productName, image, price, category, description };
    dispatch(addToCart(product)); // Dispatch action to Redux store
  };

    // Place holder image provided in case the actual image is not available
    const defaultImage = "https://members.naeyc.org/eweb/images/DEMO1/notavailable.jpg";
    return (
        <div className="card h-100 d-flex flex-column">

            <img
                src={image || defaultImage}
                className="card-img-top" alt="Camera Image"
                style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "5px",
                    borderBottom: "1px solid #808080"
                }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{productName}</h5>
                <p className="card-text fw-bold">{category}</p>
                <p className="card-text flex-grow-1">{description}</p>
                <a href="#" className="btn fw-bold">$. {price}</a>
                {/* Button always at bottom */}
                <button className="btn btn-primary mt-auto" onClick={handleAddToCart}>Buy Now</button>
            </div>
        </div>
    )
}

export default ProductCard