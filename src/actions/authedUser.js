export const ADD_AUTHED_USER = "ADD_AUTH_USER";

export const addAuthedUser = (id) => {
  return {
    type: ADD_AUTHED_USER,
    id,
  };
};
