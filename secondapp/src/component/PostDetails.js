import React from 'react';

const PostDetials = (props) => {
    console.log(props.match.params.topic)
    return(
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3>Post Detials</h3>
            </div>
            <div className="panel-body">
                <div className="jumbotron">
                    <h2>Post Detials for {props.match.params.topic}</h2>
                    <p>
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default PostDetials;