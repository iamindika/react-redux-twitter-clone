import React from "react";
import { useSelector } from "react-redux";

import TweetListItem from "./TweetListItem";

const TweetList = () => {
  const tweets = useSelector((state) => state.tweets);

  const tweetList = Object.keys(tweets)
    .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    .map((id) => <TweetListItem key={id} tweet={tweets[id]} />);
  return <ul className="list">{tweetList}</ul>;
};

export default TweetList;
