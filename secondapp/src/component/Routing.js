import React from 'react';
import Home from './Home';
import Profile from './Profile';
import Post from './Post';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Header from './Header';
import PostDetials from './PostDetails';
import LifeCycle from './LifeCycle';


const Routing = () => {
    return(
        <BrowserRouter>
        <div>
            <Header/>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/post" component={Post}></Route>
            <Route path="/post/:topic" component={PostDetials}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/lifecycle" component={LifeCycle}></Route>
        </div>
    </BrowserRouter>
    )
}

export default Routing