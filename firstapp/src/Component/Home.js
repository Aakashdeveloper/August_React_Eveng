import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component{
    constructor(props){
        super(props)

        this.state={
            news:JSON,
            filtered:JSON
        }
    }
    /*
        var age = [4,5,3]
        age.filter((data)=> {return age>3})
    */

    filterNews(keyword){
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

    render(){
        console.log(this.state.news)
        return(
            <React.Fragment>
                <Header userText={(data) => {this.filterNews(data)}}/>
                <NewsDisplay newsdata={this.state.filtered}/>
                <Footer year="2022" month="July"/>
            </React.Fragment>
        )
    }
}

export default Home;