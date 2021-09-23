import './App.css';
import React, {useEffect, useState} from 'react';
import Tmdb from './helpers/TmdbAPI';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

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

  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY > 20){
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return ()=>{
      window.removeEventListener('scroll', scrollListener)
    }
  },[]);

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map((i,k)=>
          <MovieRow key={k} title={i.title} items={i.itens} />
        )}
      </section>
      <footer>
        Projeto faz parte do portfólio de <a target="_blank" href="https://github.com/igorlap">Igor Pedrosa <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEUAAAD////39/f09PTt7e3x8fHp6enb29vT09PY2NgbGxvh4eGRkZGvr68YGBj8/Py4uLgICAh7e3tMTEzMzMygoKBkZGSTk5Onp6eCgoJwcHCamprDw8NZWVlra2vOzs43NzdFRUUnJydLS0s+Pj4qKiptbW2AgIA0NDQoKCiJiYkSEhJ3d3e6wteVAAAJK0lEQVR4nO2dWXviOgyGm409EErZWlIIhbZD+/9/34GhS8CxZcuyzJnH781cDHXyJV5kSVbu7gKBQCAQCAQCgUAgEAgEAoFA4OYY97a9j7HvuyBn+zyYFut+mmZZlhw5/pOm/XUxHSzLre+bs2X7mXciNf3VYjb0fZ843u9XLUDdr8zi+d33/RpSTvsjXXln4va88n3X2uwWqZm6b1rTnu9716A36OPknWkvb3xQTgrDzikSFxPfKuS8dm3lnek++lbSzKf21AnTevOtRuSRUN+J9MY0ztq0+k60Pn2r+mX7QK/vRPtW5pwnN/pOrG5hgZwQD8BL4oNvfXcLl/pOdDZe9e2Q9pkJI5+vceBe34mOr9E4dDSFimQzLwJ3GZfAI1MPAj8Z9R15YBc45RV4NHE2vAILboHHpZHVwlnzCzzyzCeQaB9ozJJJ39jKT2HFgEehP4FRNOcQ6GAraADDW/QrMIqcW6lslpoUx26q3Le+Iy8uBTrczusz2rgT+Opb3JnWhyuBG9/SvnFmhjNs6DVxtJlacesYyYMgTrbEB9l95Pdl+XgoaH1u6epQ7nszWaPJnl7gTnYvP4/zZUolMsvLr3yGXiz5yZpeocwavbhUSWEQPNS74Fz2K3LbRrqnf7383cZytCaLq6VA9hIj4n76IrvOSLhQZaExGwjZNlJvQpdWoXTP2274cYncX43mDdlE99Kfk+6HZfNoFOWNv3+8XDqz7sOqyM8UxWrVafcTcSlobqqSXjomzDfqyRcm2YP8XGfHP0rSdn6QeZDG+8nncvrQOje+3jX/aisdiFFBoe2MwrMmX3rH1aTSesqb53k+lzvSFEsQ2S5DuhRSXkSKYsvdNAmgUOSmUY4FCSrH3iv85zrMFJdI3OdSqoyIPs0lVOmFGc0lVCjd6yTZDKXqCgwKlY4TkpeodHAzKFTH0Qk8/ZXyAt4VEthuaivTdy+NIuus1L26/dh9iB0I5K1s2wcioSP3ib1QprjtM4a8T+5zCKAwgmWwBvSQOg8jfEDP2HLBAL0SzjMIKugOotKm+S3YfItKiQyVzXimeV+pyRJsPnFtesPvMLVpHprHyGxfBbBLxCZJA2w8dr9aPII3YdFN38DGrUa5JmBqi4VhBfoFF3Q65PTA54xf9OVOoDPOJ9IzcofiF+j0BeXO8ATXyQ/IrEEvytKYwRfEXmc50KOOsQ1DawVfXitkWiHXC8giJPPlwUwAhUgHvzQa8wVjqiA0EpHebyALmGF7/wswnSItK2BzzZJE9wPwtHHWMWBL8J40B24GN9WoJ5oOsQQAYOVCrcwf6jZ5Oyk0m6ISbCp1m8yHPLbqA8Yoj5t6Kh1JAprOUG8TUWNG7UfMuM8iqQ0s1B5A7Wu2ch1gUO/kRvRNsisEDjpiChU46BY2ACcBN4gm1Ulq7AoBjwpmyVdPz+wKASsZs3ipW2RXCLjc7hFN3pjCZ/X9YOInN6YQiBFhjMgbUwj00idEk+oW2ddDQCHG9L4xhcAu/x9QCKz4/0AvBaw2+pkm465YBXiNMI59dYuxgwMPSgD3NP16yJBYegkQKMU4agCFzF6MYUJ/O0BoDWMIWgCdm8PsLYAjPlYZEOZAse4Nok1gaLOF1s5Ax3MxUzsQ4mbI2asDBUkxbUJPjSNJ4RfgZlAbAajGFeF5DhgoMwo1ZqASO+jQMgaoWgzK5606R/IXzhURWA1xaS9AZIa1sBHgwsCeSgDPvPKZpmBaFG7aA3NLWTKiTmygyrbIfQCUTsO3JILVOJBxfDAliquKGpzYhkzY30ITGFcsHy4shs02h/NnrQ876FCBt4HerGoUfuQw3eCqRgm2aSjX6kjm/vyhRnU/fFfSKGbivJ/C810U4etG6xSYdVx8S1oYow6++UqjdcdDUad4gU3yklaJUpcSteoX2nQjvTrIzjYZY3i9OmFjH1daV3BVsbGnV+/GLsNOs4aHExu81JlkIlu/pm615z792RndKreJnf0P7lt+IH6NE+0KMLb+Ir2xfiIjXBl7BlV8bYvviv6DOE7i5hESD2iK4e1NqjPaH567stw656zL3bLx5Y5y+3LGpVkVJvu6EVdzze/ENWm2+dsHm5H/PjeswERxYuCyR9ZdrzJ7YL3E7Tj2c/MSzBSD/+ol1qcueUCon8/eNQflsDccbjflYIWpYp9QjPyPqyvXJSqd7Wm7k2ssky9JlqG/EkXjKbpe9esdFXL963Qii/puMVEl02vzMKm9GbXRoxVGBZ3rcqiWYHFNrG2YVGuzZvlGdO1etH9GQJzias4txfSu6wLDln6lyyUQw1A1d/cf6TShHbqBCxs0QnkAUlz5atONdELV3xnjXiLl5yDG4i3UUuUkVRUNzkCgRiJtELphbd/8/m9zDMfA0QhGYxsgWexriItWfZQ1vgMT9w1CIVG9vV/E+aQ+DBrmCqNtjfn3COhd0aL1cpH/IFRlNfssjLFdY+m70LyJy244K2oGbJKbufiMv0jgwoM5Fmx/oR9+zOaLPF9MH43jiqYK3QTYxRgJXRksw89HuSp2INzGiGwwyAsVN+GuaqrgmyFLqQELtFzgLlJyvRmm274YfcXNZY04cSgSzWlg0lMNt2k8wrMmKoUFV2X7wXXUWbDPaI6t68Syz7jPTRZXLopaStoKOYriiG6L4o91o1AtnG/cF8A7Ib7F0dT2jFClJ5Dr1GOTr7s72Nik1uhtEPnOBzS7EJPuQ/50eHu7Xx4GT9PFwkTxu45Azm+RwrUMj13XRCFQrvgvLEl0P+zgvMXYRCFcKJX/g7lgYrKRQjiFlPmc1Qlow2OkcAg0lrF+SPabZ3U2iJFCIHax9vRl7p4yjcFMoTK+5uOb1V+oIk9GCseK/pDynrC6opK7AY0UKvz6hfskXTXSMwtmoS9ZBCvx8+H4C94l6QVmWRKSvsB2aEXNsnH5N1PYOGl1uA+MSxk2uTvN9gENBkSLq4ivFpV4h2Z7VeGQ1YjpG9z6CIELs28wXu2rE0wlD+e8Xs4WZgHMCxswffJkw4DM6vOFWUpdLTzXf/O9AqrYL77n1dQsRPvjTlx5sbGNKJ+6rTTtGDoZt6dhnK3wp1/+B5Sl++8sBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAI2/Acnanry2WL+dgAAAABJRU5ErkJggg==" alt="github icon"/></a>
        <br/> <span>Direitos de imagens da Netflix</span> 
      </footer>
      {movieList.length <= 0 &&
        <div className="loading">
          <img src="/loading.gif" alt="Loading..." />
        </div>
      }
    </div>
  );
}

export default App;
