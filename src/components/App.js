import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAuthedUser } from "../actions/authedUser";
import { handleInitializeData } from "../actions/shared";

import NavBar from "./NavBar";
import TweetList from "./TweetList";

const defaultUser = "tylermcginnis";

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("state", state);

  useEffect(() => {
    dispatch(addAuthedUser(defaultUser));
    dispatch(handleInitializeData());
  }, [dispatch]);
  return (
    <div className="container">
      <NavBar />
      <TweetList />
    </div>
  );
}
