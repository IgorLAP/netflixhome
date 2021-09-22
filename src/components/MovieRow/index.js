import React from 'react';
import {MovieRowArea} from './styled';

export default ({title, items})=>{
    return(
        <MovieRowArea>
            <h2>{title}</h2>
            <div className="listArea">
                <div className="list">
                    {items.results.length > 0 && items.results.map((i,k)=>
                        <div key={k} className="item">
                            <img src={`https://image.tmdb.org/t/p/w300${i.poster_path}`} alt={i.title} />
                        </div>
                    )}
                </div>
            </div>
        </MovieRowArea>
    )
}