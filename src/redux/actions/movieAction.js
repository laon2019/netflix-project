import api from "../api";

function getMovies() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      let [popularMovies, topRatedMovies, upcomingMovies, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedApi,
          upComingApi,
          genreApi,
        ]);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAIL" });
    }
  };
}

function getMovieDetail(id) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIE_DETAIL_REQUEST" }); // 수정: GET_MOVIE_DETAIL_REQUEST 액션 추가
      const movieDetail = await api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      dispatch({ type: "GET_MOVIE_DETAIL_SUCCESS", payload: { movieDetail: movieDetail.data } }); // 수정: GET_MOVIE_DETAIL_SUCCESS 액션 추가
    } catch (error) {
      dispatch({ type: "GET_MOVIE_DETAIL_FAIL" }); // 수정: GET_MOVIE_DETAIL_FAIL 액션 추가
    }
  }
}

function getAllMovie() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_ALLMOVIE_REQUEST" }); 
      const allMovie = await api.get(
        `/movie/changes?api_key=${API_KEY}&page=1`
      );
      dispatch({ type: "GET_ALLMOVIE_SUCCESS", payload: { allMovie: allMovie.data } }); 
    } catch (error) {
      dispatch({ type: "GET_ALLMOVIE_FAIL" }); 
    }
  }
}

function getMovieReview(id) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_RIVIEW_REQUEST" }); 
      const movieReview = await api.get(
        `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );
      dispatch({ type: "GET_RIVIEW_SUCCESS", payload: { movieReview: movieReview.data } }); 
    } catch (error) {
      dispatch({ type: "GET_RIVIEW_FAIL" }); 
    }
  }
}

function getMovieRecommendations(id) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_RECOMMENDATIONS_REQUEST" }); 
      const movieRecommendationsApi = await api.get(
        `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      );
      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      let [movieRecommendations, genreList] =
        await Promise.all([
          movieRecommendationsApi,
          genreApi,
        ]);
      dispatch({ type: "GET_RECOMMENDATIONS_SUCCESS", payload: { movieRecommendations: movieRecommendations.data, genreList: genreList.data.genres, } }); 

    } catch (error) {
      dispatch({ type: "GET_RECOMMENDATIONS_FAIL" }); 
    }
  }
}

export const movieAction = {
  getMovies,
  getMovieDetail,
  getAllMovie,
  getMovieReview,
  getMovieRecommendations,
};
