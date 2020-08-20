import React,{Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
       super() 

       this.state={
        title:'My React APP',
        keyword:'User Text Here'
       }
    }
    inputChange =(event)=>{
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }

    render(){
        console.log("inside render")
        return(
            <header>
                <div className="logo">{this.state.title}</div>
                <center>
                   <input type="text" onChange={this.inputChange}/>
                   <p>{this.state.keyword}</p>
                   <select>
                       <option>REACT</option>
                       <option>developer</option>
                   </select>
                </center>
                <hr/>
            </header>
            
        )
    }
}

export default Header