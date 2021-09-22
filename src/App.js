import './App.css';
import React, {useEffect, useState} from 'react';
import Tmdb from './helpers/TmdbAPI';
import MovieRow from './components/MovieRow';

function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async ()=>{
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }
    loadAll();
  },[]);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((i,k)=>
          <MovieRow key={k} title={i.title} items={i.itens} />
        )}
      </section>
    </div>
  );
}

export default App;
