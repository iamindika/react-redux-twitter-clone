import { showLoading, hideLoading } from "react-redux-loading";
import { saveLikeToggle } from "../utils/api";
import { ADD_TWEET } from "./shared";

export const TOGGLE_TWEET = "TOGGLE_TWEET";

const toggleTweet = ({ id, hasLiked, authedUser }) => {
  return {
    type: TOGGLE_TWEET,
    id,
    hasLiked,
    authedUser,
  };
};

export const addTweetToTweets = (tweet) => {
  return {
    type: ADD_TWEET,
    tweet,
  };
};

export const handleToggleTweet = ({ id, hasLiked, authedUser }) => {
  return (dispatch) => {
    dispatch(showLoading);

    saveLikeToggle({ id, hasLiked, authedUser }).then(() => {
      dispatch(toggleTweet({ id, hasLiked, authedUser }));
      dispatch(hideLoading);
    });
  };
};
