import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {

    let { productId } = useParams()
    const fetchapi = "http://localhost:9000/products";
    const [product, setProduct] = useState('');

    useEffect(() => {
        let detailsApi = async () => {
            const response = await fetch(`${fetchapi}/${productId}`)
                .then(response => response.json())
                .then(product => setProduct(product))
            // console.log(setProduct(product));
        }
        detailsApi();
    }, []);




    return (
        <div>
            <h3>Product Details{productId}</h3>
            
            <h1>{product.title}</h1>
            <img src={product.img} alt="" />
                
        </div>
    )
}

export default ProductDetails;