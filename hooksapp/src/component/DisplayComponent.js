import React from 'react';

function DisplayComponent(props){
    console.log(props)

    const renderNews = ({mydata}) => {
        if(mydata){
            return mydata.map((item) => {
                return(
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <center>
                <h2>Hooks News</h2>
            </center>
            {renderNews(props)}
        </div>
    )
}

export default DisplayComponent