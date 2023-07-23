import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Review from '../component/Review';
import MovieSlide from "../component/MovieSlide";

const MovieDetail = () => {
  const movieDetail = useSelector((state) => state.movieDetail);
  const movieReview = useSelector((state) => state.movieReview);
  const movieRecommendations = useSelector((state) => state.movieRecommendations);
  const dispatch = useDispatch();
  let { id } = useParams();
  console.log(movieReview)
  useEffect(() => {
    dispatch(movieAction.getMovieDetail(id));
  }, [dispatch, id]);
  useEffect(() => {
    dispatch(movieAction.getMovieReview(id));
  }, [dispatch, id]);
  useEffect(() => {
    dispatch(movieAction.getMovieRecommendations(id));
  }, [dispatch, id]);
  if (!Array.isArray(movieReview.movieReview.results)) {
    return null;
  }
   
  if (!Array.isArray(movieRecommendations.movieRecommendations.results)) {
      return null;
    }

  return (
      <Container>
    <Container className="Detail">
      <Row>
        <Col xs={12} md={6} lg={5} className="movie-img">
        <img
  src={`https://www.themoviedb.org/t/p/w500${movieDetail.movieDetail.poster_path}`}
  alt={movieDetail.movieDetail.title}
/>

        </Col>
        <Col xs={12} md={6} lg={7} className="movie-info">
          <h1>{movieDetail.movieDetail.title}</h1>
          <div className="movie-meta">
            <div className="movie-adult">{movieDetail.movieDetail.adult ? "19+" : "under 18"}</div>
          </div>
          <hr />
          <div className="movie-overview">{movieDetail.movieDetail.overview}</div>
          <hr />
          <div className="movie-details">
            <div>
              <Badge className="genreItem" bg="danger">
                Release Day
              </Badge>
              <div>{movieDetail.movieDetail.release_date}</div>
            </div>
            <div>
              <Badge className="genreItem" bg="danger">
                Time
              </Badge>
              <div>{movieDetail.movieDetail.runtime} minutes</div>
              
            </div>
            <div>
              <Badge className="genreItem" bg="danger">
                Budget
              </Badge>
              <div>${movieDetail.movieDetail.budget}</div>
              
            </div>
          </div>
          <hr />
          <div className="genres">
            <h4>Genres:</h4>
            <div className="genre-list">
              {movieDetail.movieDetail.genres &&
                movieDetail.movieDetail.genres.map((genre) => (
                  <Badge key={genre.id} className="genreItem" bg="danger">
                    {genre.name}
                  </Badge>
                ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Container className="movieRecommendations">
      <h1>추천</h1>
     <MovieSlide movies={movieRecommendations.movieRecommendations}/>
    </Container>
     <Container className="Review">
     <h1>Review</h1>
      <hr />
      <Row>
     <Accordion defaultActiveKey="0">
       {movieReview.movieReview.results.map((item, index)=>(
       <Review item={item} index={index}/>
     ))}
     </Accordion>
    
     </Row>
   </Container>
   </Container>
  );
};

export default MovieDetail;
