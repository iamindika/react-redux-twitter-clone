import React from "react";
import { useSelector } from "react-redux";
import { MdReply } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { convertDate } from "../utils/api";

const TweetListItem = ({ tweet }) => {
  const users = useSelector((state) => state.users);
  const tweets = useSelector((state) => state.tweets);

  const { author, timestamp, replyingTo, text, replies, likes } = tweet;
  const { name, avatarURL } = users[author];
  const replyingToUser = replyingTo ? tweets[replyingTo] : null;

  const baseIconProps = {
    fill: "transparent",
    stroke: "#697784",
    strokeWidth: 2,
  };

  const activeIconProps = {
    fill: "#eb245e",
  };

  return (
    <li className="list-item">
      <img className="avatar" src={avatarURL} alt={`Avatar for ${name}`} />
      <div className="info">
        <p className="info__name">{name}</p>
        <p className="info__date">{convertDate(timestamp)}</p>
        {replyingToUser && (
          <button className="info__replying">
            Replying to @{replyingToUser.author}
          </button>
        )}
        <p className="info__text">{text}</p>
        <div className="cta-bar">
          <div className="cta-bar__icon">
            <MdReply fontSize={27} {...baseIconProps} />
            <span className="cta-bar__text">{replies.length}</span>
          </div>
          <div className="cta-bar__icon">
            <button>
              <GoHeart
                fontSize={27}
                {...(likes.length ? activeIconProps : baseIconProps)}
              />
            </button>
            <span className="cta-bar__text">{likes.length}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TweetListItem;
