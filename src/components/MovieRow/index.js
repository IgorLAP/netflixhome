import React, {useState} from 'react';
import {MovieRowArea} from './styled';

export default ({title, items})=>{
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = ()=>{
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = ()=>{
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 250;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60; //60 referen ao padding dos dois lados
        }
        setScrollX(x)
    }

    return(
        <MovieRowArea>
            <h2>{title}</h2>
            <div className="arrowLeft" onClick={handleLeftArrow}> <img src="/arrowback.png" alt="go back"/> </div>
            <div className="arrowRight" onClick={handleRightArrow}> <img src="/arrowfoward.png" alt="go next"/> </div>
            <div className="listArea">
                <div className="list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 250
                }}>
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