import { ADD_TWEET, INITIALIZE_DATA } from "../actions/shared";

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_DATA:
      return {
        ...state,
        ...action.users,
      };
    case ADD_TWEET:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          tweets: state[action.author].tweets.concat([action.id]),
        },
      };
    default:
      return state;
  }
};
