import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";

const MoviesCard = ({ movie }) => {
  const { genreList } = useSelector((state) => state.movie);

  return (

      <Link to={`/movies/${movie.id}`} className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src={`https://image.tmdb.org/t/p/original//${movie.poster_path}`}
            />
            <h1>{movie.original_title}</h1>
            <h4>{movie.release_date}</h4>

            <div className="genre">
              {movie.genre_ids?.map((id) => (
                <Badge className="genremovie" bg="danger" key={id}>
                  {genreList.find((genre) => genre.id === id)?.name}
                </Badge>
              ))}
            </div>
          </div>
          <div className="movie_desc">
            <p className="text">{movie.overview.substring(0, 200) + "..."}</p>
          </div>
          <div className="movie_social">
            <ul>
              <li>
                <i className="fab fa-imdb imb-icon">
                  <span className="imb-score">{movie.vote_average}</span>
                </i>
              </li>
              <li>
                <i className="fas fa-users users-icon">
                  <span className="imb-score">{movie.popularity}</span>
                </i>
              </li>
              <li>
                <i className="material-icons">
                  {movie.adult ? (
                    <span className="eightteen">19+</span>
                  ) : (
                    <span className="eightteen">19 미만</span>
                  )}
                </i>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="blur_back bright_back"
          style={{
            backgroundImage: `url(${`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${movie.poster_path}`})`,
          }}
        ></div>
      </Link>
  );
};

export default MoviesCard;
