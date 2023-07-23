let initialState = {
    movieDetail: {},
  };
  
  function movieDetailReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
      case "GET_MOVIE_DETAIL_REQUEST": // 수정: GET_MOVIE_DETAIL_REQUEST 처리
        return {
          ...state,
          movieDetail: {}, // 요청 전에 초기화
        };
      case "GET_MOVIE_DETAIL_SUCCESS": // 수정: GET_MOVIE_DETAIL_SUCCESS 처리
        return {
          ...state,
          movieDetail: payload.movieDetail,
        };
      case "GET_MOVIE_DETAIL_FAIL": // 수정: GET_MOVIE_DETAIL_FAIL 처리
        return {
          ...state,
          movieDetail: {}, // 요청 실패 시 초기화
        };
      default:
        return { ...state };
    }
  }
  export default movieDetailReducer;
  