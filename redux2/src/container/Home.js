import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {lastestNews,articleNews,galleryNews } from '../actions';
import LatestDisplay from '../component/Home/latestDisplay';
import ArticleDisplay from '../component/Home/articleDisplay';
import GalleryDisplay from '../component/Home/galleryDisplay';


class Home extends Component {
    componentDidMount(){
        this.props.dispatch(lastestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
    }
    render(){
        return(
            <React.Fragment>
                <LatestDisplay  ldata={this.props.datalist.latestdata}></LatestDisplay>
                <ArticleDisplay adata={this.props.datalist.articledata}></ArticleDisplay>
                <GalleryDisplay gdata={this.props.gallerylist.gallerydata}></GalleryDisplay>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.articles,
        gallerylist: state.gallery
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home);