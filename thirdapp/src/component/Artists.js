import React from 'react';
import {Link} from 'react-router-dom';

const ArtistList = (props) => {
    console.log(props)
    const listArtist = ({artistsdata}) => {
        if(artistsdata){
            return artistsdata.map((item) => {
                const style={
                    background:`url('/images/covers/${item.cover}.jpg')`
                }
                return(
                    <Link to={`/artist/${item.id}`} key={item.id} className="artist_item"
                    style={style}>
                        <div>{item.name}</div>
                    </Link>
    
                )
            })
        }
       
    }

    return(
        <div className="artist_list">
            <h4>Browse the Artist</h4>
            {listArtist(props)}
        </div>

    )
}

export default ArtistList