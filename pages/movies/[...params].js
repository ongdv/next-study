import Seo from "@/components/Seo";
import Link from "next/link";

export default function MovieDetail({ params, movie }) {
  const [title, id] = params || [];

  const genreRender = movie?.genres.map((genre, idx, arr) => {
    const cond = idx === arr.length - 1;
    return (
      <span key={genre.id}>
        {genre.name}
        {!cond && " | "}
      </span>
    );
  });
  return (
    <div>
      <Seo title={title} />
      <div className="bg">
        <img
          height="100%"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.id}
        />
        <div className="headline">
          <img
            width="90px"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.id}
          />
          <div className="description">
            <h4>{title}</h4>
            <p className="gray">
              {movie.title}: {movie.tagline}
            </p>
            <p className="gray">{genreRender}</p>
            <p className="gray">{movie.release_date} Released</p>
            <p className="gray">{movie.runtime} minutes</p>
          </div>
        </div>
      </div>
      <p>{movie?.overview}</p>
      <Link href="/" className="btn" >See Other Movies</Link>
      <style jsx>{`
        .bg {
          width: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .bg > img {
          width: 100%;
          height: 100%;
          filter: brightness(0.7);
        }

        .headline {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          color: white;
          position: absolute;
          top: 0;
        }

        .headline img {
          margin: 5px 15px 5px 15px;
        }

        .headline .description {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          gap: 0;
        }

        .headline .description * {
          line-height: 1;
          margin: 0;
        }

        .description p {
          margin: 5px 0 !important;
        }

        .gray {
          color: rgba(255, 255, 255, 0.7);
          text-shadow: 0 0 10px #000;
        }

        .btn {
          background: white;
          border: 2px solid black;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  const [, id] = params;
  const url = `http://localhost:3000/api/movies/${id}`;
  const movie = await (await fetch(url)).json();
  return {
    props: {
      params,
      movie,
    },
  };
}
