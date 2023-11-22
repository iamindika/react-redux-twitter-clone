import { INITIALIZE_DATA, ADD_TWEET } from "../actions/shared";
import { TOGGLE_TWEET } from "../actions/tweets";

export const tweetsReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_DATA:
      return {
        ...state,
        ...action.tweets,
      };
    case TOGGLE_TWEET:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked
            ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
            : state[action.id].likes.concat([action.authedUser]),
        },
      };
    case ADD_TWEET:
      return {
        ...state,
        [action.tweet.id]: action.tweet,
      };
    default:
      return state;
  }
};
