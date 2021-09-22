import React from 'react';
import {FeaturedArea} from './styled';

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    return (
        <FeaturedArea back={item} >
            <section className="featured" >
                <div className="vertical">
                    <div className="horizontal">
                        <div className="name">{item.original_name}</div>
                        <div className="info">
                            <div className="points">{item.vote_average} pontos</div>
                            <div className="year">{firstDate.getFullYear()}</div>
                            <div className="seasons">{item.number_of_seasons} temporada{item.number_of_seasons === 1 ? '' : 's'}</div>
                        </div>
                        <div className="description">{item.overview}</div>
                        <div className="buttons">
                            <a className="watchBtn" href={`/watch/${item.id}`}>▶ Assistir</a>
                            <a className="listBtn" href={`/list/add/${item.id}`}>+ Minha Lista</a>
                        </div>
                        <div className="genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                    </div>
                </div>
            </section>
        </FeaturedArea>
    );
}