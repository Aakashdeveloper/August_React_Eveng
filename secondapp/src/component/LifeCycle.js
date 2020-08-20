//Get initial state
//Set Initial state
//before get created
//Render
//After get created

import React,{Component} from 'react';


class LifeCycle extends Component{
    //Get initial state
    constructor(props){
        super(props)

        //2 Set Initial state
        this.state={
            title:'React App'
        }
        console.log("Inside constructor")
    }

    //3before get created
    UNSAFE_componentWillMount(){
        console.log("Inside componentWillMount")
    }

    //at time of mount as well as update
    static getDerivedStateFromProps(props,state){
        console.log("Inside getDerivedStateFormProps")
    }

    componentWillUpdate(){
        console.log("Inside componentWillUpdate")
    }

    componentDidUpdate(){
        console.log("Inside componentDidUpdate")
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Inside getSnapshotBeforeUpdate")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Inside shouldComponentUpdate")
        if(nextState.title===this.state.title){
            return false
        }else{
            return true
        }
    }

    //Render
    render(){
        console.log("Inside Render")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() => {this.setState({title:'Something Else'})}}>
                    ClickMe
                </div>

            </div>
        )
    }

    //5before get created
    componentDidMount(){
        console.log("Inside componentDidMount")
    }

    componentWillUnmount(){
        alert('Do you want to leave')
    }

}

export default LifeCycle