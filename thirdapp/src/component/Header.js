import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <Link to="/">Home</Link>
            <Link to="/form">Form</Link>
        </header>
    )
}

export default Header;