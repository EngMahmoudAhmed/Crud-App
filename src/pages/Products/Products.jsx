import React, { useEffect, useState } from 'react'

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
    console.log(products);


    // products.map((product) => {
    //     return () => {
    //         <>


    //         </>
    //     }



    


    return (
        <>
            <h2>Product Page</h2>
            <button className="btn btn-outline-info m-4">Add Product</button>
            <table className='table table-striped w-75 text-center'>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Titele</td>
                        <td>Price</td>
                        <td>Operation</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => {
                            return (
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>Operation</td>
                                    <td>
                                        <button className='btn btn-outline-dark me-2 btn-sm'>delete</button>
                                        <button className='btn btn-outline-success me-2 btn-sm'>Edite</button>
                                        <button className='btn btn-outline-danger me-2 btn-sm'>View</button>
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
