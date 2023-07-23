import {combineReducers} from "redux";
import movieReducer from "./movieReducer";
import movieDetailReducer from "./movieDetailReducer";
import allMovieReducer from "./allMovieReduce";
import movieReviewReducer from "./movieReviewReducer";
import movieRecommendationsReducer from "./movieRecommendationsReducer";

export default combineReducers({
    movie:movieReducer,
    movieDetail:movieDetailReducer,
    allMovie:allMovieReducer,
    movieReview:movieReviewReducer,
    movieRecommendations:movieRecommendationsReducer,
})