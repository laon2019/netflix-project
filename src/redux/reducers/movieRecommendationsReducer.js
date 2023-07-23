let initialState = {
  movieRecommendations: {},
};

function movieRecommendationsReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_RECOMMENDATIONS_REQUEST":
      return {
        ...state,
        movieRecommendations: {},
      };
    case "GET_RECOMMENDATIONS_SUCCESS":
      return {
        ...state,
        movieRecommendations: payload.movieRecommendations,
      };
    case "GET_RECOMMENDATIONS_FAIL":
      return {
        ...state,
        movieRecommendations: {},
      };
    default:
      return { ...state };
  }
}

export default movieRecommendationsReducer;
