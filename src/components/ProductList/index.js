import React, { useState } from "react";
import ProductCard from "../ProductCard";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = ({ products }) => {
    console.log("response: ", products);

    return (
        <div className="container text-center mt-4">

            {/* Product List */}

            <div className="row">
                {products.map((product) => (
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4" key={product.id}>
                        <ProductCard
                            productId={product.id}
                            productName={product.title}
                            image={product.image}
                            price={product.price}
                            category={product.category}
                            description={product.description}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};


export default ProductList;

