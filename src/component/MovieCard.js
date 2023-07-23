import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const { genreList } = useSelector((state) => state.movie);
  const showDetail = () => {
    navigate(`/movies/${item.id}`);
  };

  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`})`,
      }}
      onClick={showDetail}
    >
      <div className="overlay">
        <h4>{item.title}</h4>
        <div className="genre">
          {item.genre_ids.map((id) => (
            <Badge className="genreItem" bg="danger" key={id}>
              {genreList.find((item) => item.id === id)?.name}
            </Badge>
          ))}
        </div>
        <div className="meta">
          <span className="vote-average">{item.vote_average}</span>
          <span className="age-rating">
            {item.adult ? "19+" : "under 19"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
