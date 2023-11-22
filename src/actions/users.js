import { ADD_TWEET } from "./shared";

export const addTweetToUsers = ({ id, author }) => {
  return {
    type: ADD_TWEET,
    id,
    author,
  };
};
