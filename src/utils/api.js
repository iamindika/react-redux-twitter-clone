import { _getUsers, _getTweets, _saveLikeToggle, _saveTweet } from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getTweets()]).then(([users, tweets]) => ({
    users,
    tweets,
  }));
}

export function saveLikeToggle(info) {
  return _saveLikeToggle(info);
}

export function saveTweet(info) {
  return _saveTweet(info);
}

export function convertDate(timestamp) {
  const date = new Date(timestamp);
  const timeStr = date.toLocaleTimeString(date);
  const dateStr = date.toLocaleDateString(date);

  const formattedTimeStr = timeStr
    .split(" ")
    .map((chunk, i) =>
      i === 0 ? chunk.split(":").slice(0, 2).join(":") : chunk
    )
    .join(":");
  return `${formattedTimeStr} | ${dateStr}`;
}
