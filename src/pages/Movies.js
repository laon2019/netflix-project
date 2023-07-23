import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Pagination from "react-js-pagination";
import { Row, Col } from "react-bootstrap";
import MoviesCard from "../component/MoviesCard";
import ClipLoader from "react-spinners/ClipLoader";

const Movies = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(
    (state) => state.movie
  );
  const [allMovies, setAllMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6; // 페이지당 보여줄 영화 수

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  useEffect(() => {
    // Combine the movie arrays in the desired order
    if (popularMovies.results && topRatedMovies.results && upcomingMovies.results) {
      const combinedMovies = [
        ...popularMovies.results,
        ...topRatedMovies.results,
        ...upcomingMovies.results,
      ];
      setAllMovies(combinedMovies);
    }
  }, [popularMovies, topRatedMovies, upcomingMovies]);

  if (loading || !allMovies.length) {
    return <ClipLoader className="spin" color="#ffff" loading={loading} size={150} />;
  }

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMoviesToDisplay = allMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="movie-section">
        <Row>
          {currentMoviesToDisplay.map((movie) => (
            <Col lg={6} key={movie.id}>
              <MoviesCard movie={movie} />
            </Col>
          ))}
        </Row>
      </div>
      <div className="Pagination">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={moviesPerPage}
          totalItemsCount={allMovies.length}
          pageRangeDisplayed={5} // 페이지네이션에 보여줄 페이지 번호 수
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </div>
  );
};

export default Movies;
