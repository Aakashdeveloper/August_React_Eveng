import React from 'react';

const NewsList = (props) =>{
    const renderList = props.newsdata.map((data,index) =>{
        return(
            <div key={index}>
                <h2>{data.title}</h2>
                <p>{data.feed}</p>
            </div>
        )
    })
 
    return(
        <div>
          {renderList}
        </div>
    )
}

export default NewsList;