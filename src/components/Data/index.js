import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList';

const AxiosData = ({ searchQuery }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        console.log("response: ", response?.data);
        setData(response?.data);
      })
      .catch((err) => {
        console.log("error : ", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  // Filter products based on search query
  const filteredData = data.filter(product =>
    product.title.toLowerCase().includes(searchQuery) // Assumes product title exists
  );



  return (
    <ProductList products={filteredData} />
  )
};

export default AxiosData