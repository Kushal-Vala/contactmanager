import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-2 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{props.branding}</a>
            </div>

                <ul className="nav navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fas fa-home" /> 
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact/add" className="nav-link" >
                            <i className="fas fa-plus" /> Add
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" >
                            <i className="fas fa-question" /> About
                        </Link>
                    </li>  
                </ul>
        </nav>

        </React.Fragment>
    )
}
export default Header;


