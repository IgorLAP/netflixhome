import './App.css';
import React, {useEffect, useState} from 'react';
import Tmdb from './helpers/TmdbAPI';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(()=>{
    const loadAll = async ()=>{
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1));
      let chosen = originals[0].itens.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }
    loadAll();
  },[]);

  return (
    <div className="page">
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map((i,k)=>
          <MovieRow key={k} title={i.title} items={i.itens} />
        )}
      </section>
    </div>
  );
}

export default App;
