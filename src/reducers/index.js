import { combineReducers } from "redux";
import { usersReducer as users } from "./users";
import { tweetsReducer as tweets } from "./tweets";
import { authedUserReducer as authedUser } from "./authedUser";

export default combineReducers({ users, tweets, authedUser });
