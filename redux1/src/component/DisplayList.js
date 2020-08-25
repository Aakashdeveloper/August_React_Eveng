import React from 'react';

const DisplayList = (props) => {

    const renderView = ({datalist})  => {
        if(datalist){
            return datalist.map((item,index) => {
                return(
                    <div key={index}>{item.name}</div>
                )
            })
        }
    }

    return (
        <div>
            <h2>Movies List</h2>
            {renderView(props)}
        </div>
    )
}

export default DisplayList;