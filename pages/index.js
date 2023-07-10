// 이런식으로 import는 컴포넌트에서 불가능하며, module에서만 가능
// _app.js에서 import 해야함
// import '../styles/globals.css'
import Seo from '@/components/Seo';
import { useEffect, useState } from 'react';
const AUTH_KEY = process.env.AUTH_KEY;
export default function Home() {
  /* Router */
  /* State */
  const [movies, setMovies] = useState();
  /* Functions */
  /* Hooks */
  useEffect(() => {
    (async () => {
      // const url = 'https://api.themoviedb.org/3/movie/popular';
      const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${AUTH_KEY}`
        }
      };

      const {results} = await (await fetch(url, options)).json();
      setMovies(results);
    })()
  
  }, [])
  
  /* Render */
  return (
    <div className='container'>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => {
        return (
          <div className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.id} />
            <h4>{movie.original_title}</h4>
          </div>
        );
      })}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
