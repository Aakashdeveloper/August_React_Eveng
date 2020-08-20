import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Developer Funnel</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/post">Post</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/lifecycle">LifeCycle</Link></li>
                    </ul>
                </div>
            </div>
            </nav>
    )
}

export default Header