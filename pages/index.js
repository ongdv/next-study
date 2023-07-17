// 이런식으로 import는 컴포넌트에서 불가능하며, module에서만 가능
// _app.js에서 import 해야함
// import '../styles/globals.css'
import Seo from "@/components/Seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const AUTH_KEY = process.env.AUTH_KEY;
export default function Home({results}) {
/* Router */
const router = useRouter();
/* State */
/* Functions */
const onClick = (id, title) => {
  // URL Masking
  router.push(`/movies/${title}/${id}/`);
}
/* Hooks */
/* Render */
  return (
    <div className="container">
      <Seo title="Home" />
      {!results && <h4>Loading...</h4>}
      {results?.map((movie) => {
        return (
          <div className="movie" key={movie.id} onClick={() => onClick(movie.id, movie.original_title)}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.id}
            />
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
        .movie{
          cursor: pointer;
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

// ServerSideRendering을 지원하는 함수
// 이 부분은, 서버에서 제공되며, 위의 React의 경우 HTML로 빌드되어 넘어감
// 해당 함수의 이름은 바뀌면 안됨!
// rewrite, redirect를 사용했을 경우, 호스트네임을 적어줘야함
export async function getServerSideProps() {

  const url = 'http://localhost:3000/api/movies'
  const { results } = await (await fetch(url)).json();

  return {
    props: {
      results,
    },
  };
}
