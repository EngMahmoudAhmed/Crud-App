import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    let { id } = useParams()
    
    return (
        <div>
            <h3>Product Details{id}</h3>
        </div>
    )
}

export default ProductDetails;