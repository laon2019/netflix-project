let initialState = {
    movieReview: {},
  };
  
  function movieReviewReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
      case "GET_RIVIEW_REQUEST": // 수정: GET_RIVIEW_REQUEST 처리
        return {
          ...state,
          movieReview: {}, // 요청 전에 초기화
        };
      case "GET_RIVIEW_SUCCESS": // 수정: GET_RIVIEW_SUCCESS 처리
        return {
          ...state,
          movieReview: payload.movieReview,
        };
      case "GET_RIVIEW_FAIL": // 수정: GET_RIVIEW_FAIL 처리
        return {
          ...state,
          movieReview: {}, // 요청 실패 시 초기화
        };
      default:
        return { ...state };
    }
  }
  export default movieReviewReducer;
  