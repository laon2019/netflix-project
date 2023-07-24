import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../component/Banner";
import MovieSlide from "../component/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, [dispatch]);
  
  if (loading) {
    return (
      <ClipLoader className="spin" color="#ffff" loading={loading} size={150} />
    );
  }

  // popularMovies가 존재하는지 확인 후 렌더링
  return (
    <div className="home">
      {popularMovies && popularMovies.results && popularMovies.results.length > 0 && (
        <>
          <Banner movie={popularMovies.results[0]} />
          <h1>PopularMovies</h1>
          <div className="movie-slide-container">
            <MovieSlide movies={popularMovies} />
          </div>
        </>
      )}
      
      {topRatedMovies && topRatedMovies.results && topRatedMovies.results.length > 0 && (
        <>
          <h1>TopRatedMovies</h1>
          <div className="movie-slide-container">
            <MovieSlide movies={topRatedMovies} />
          </div>
        </>
      )}
      
      {upcomingMovies && upcomingMovies.results && upcomingMovies.results.length > 0 && (
        <>
          <h1>UpcomingMovies</h1>
          <div className="movie-slide-container">
            <MovieSlide movies={upcomingMovies} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
