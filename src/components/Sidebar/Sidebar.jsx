import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className="navbar-nav vh-100 p-2 rounded-2">
                <li className="nav-item">
                    <Link className="nav-link " to='/products'>Get All Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/addproduct">Add Product</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar
