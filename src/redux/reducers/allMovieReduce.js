let initialState = {
    allMovie: {},
  };
  
  function allMovieReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
      case "GET_ALLMOVIE_REQUEST": // 수정: GET_MOVIE_DETAIL_REQUEST 처리
        return {
          ...state,
          allMovie: {}, // 요청 전에 초기화
        };
      case "GET_ALLMOVIE_SUCCESS": // 수정: GET_MOVIE_DETAIL_SUCCESS 처리
        return {
          ...state,
          allMovie: payload.allMovie,
        };
      case "GET_ALLMOVIE_FAIL": // 수정: GET_MOVIE_DETAIL_FAIL 처리
        return {
          ...state,
          allMovie: {}, // 요청 실패 시 초기화
        };
      default:
        return { ...state };
    }
  }
  export default allMovieReducer;
  