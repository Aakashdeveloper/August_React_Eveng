import React from 'react';

const Footer = (props) => {
    return(
        <React.Fragment>
            <hr/>
            <center>
                <h3>Developed with &hearts; by DeveloperFunnel  &copy;
                    {props.month} {props.year}  
                </h3>
            </center>
        </React.Fragment>
    )
}

export default Footer;