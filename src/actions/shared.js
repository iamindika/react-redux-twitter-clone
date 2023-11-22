import { getInitialData, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { addTweetToTweets } from "./tweets";
import { addTweetToUsers } from "./users";

export const INITIALIZE_DATA = "INITIALIZE_DATA";
export const ADD_TWEET = "ADD_TWEET";

export const handleInitializeData = () => {
  return (dispatch) => {
    dispatch(showLoading);

    getInitialData().then(({ users, tweets }) => {
      dispatch({
        type: INITIALIZE_DATA,
        users,
        tweets,
      });
      dispatch(hideLoading);
    });
  };
};

export const handleAddTweet = ({ text, author, replyingTo }) => {
  return (dispatch) => {
    dispatch(showLoading);

    saveTweet({ text, author, replyingTo }).then((tweet) => {
      dispatch(addTweetToUsers({ id: tweet.id, author }));
      dispatch(addTweetToTweets(tweet));
      dispatch(hideLoading);
    });
  };
};
