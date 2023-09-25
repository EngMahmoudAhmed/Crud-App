import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <ul className="navbar-nav bg-danger vh-100 w-100">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar
