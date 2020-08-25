import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from '../container/Home';
import NewsDetails from '../container/NewsDetail';
import Header from './Header';
import Footer from './Footer';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/details/:id" component={NewsDetails}/>
                </div>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing;