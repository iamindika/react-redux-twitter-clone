import { ADD_AUTHED_USER } from "../actions/authedUser";

export const authedUserReducer = (state = "", action) => {
  switch (action.type) {
    case ADD_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
};
