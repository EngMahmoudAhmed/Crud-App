import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
    const fetchapi = "http://localhost:9000/products";
    const [products, setProducts] = useState([]);
    const componentMonted = true;
    useEffect(() => {
        let newProducts = async () => {
            let arrayProducts = await fetch(fetchapi);
            if (componentMonted) {
                setProducts(await arrayProducts.json())
            }
            return () => {
                componentMonted = false
            }

        }
        newProducts();
    }, []);
    // console.log();

    return (
        <>
            <h2>Product Page</h2>
            <button className="btn btn-outline-info m-4">Add Product</button>
            <table className='table table-striped w-75 text-center'>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>description</td>
                        <td>Price</td>
                        <td>Operation</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id }</td>
                                    <td>{product.description.substring(0,12)}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button className='btn btn-outline-primary me-2 btn-sm'>delete</button>
                                        <button className='btn btn-outline-info me-2 btn-sm'>Edite</button>
                                        <Link className='btn btn-outline-danger me-2 btn-sm' to={`/products/${product.id}`}>View</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </>
    )
}

export default Products
