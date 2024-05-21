import React from "react";
import { FaFaceSmile } from "react-icons/fa6";
import { Emoji } from "emoji-picker-react";

import "./styles.css";
import { Comment as TComment } from "../../types";
import Popup from "reactjs-popup";

type Props = {
  id: number;
  comment: TComment;
  addReaction: (reaction: string, commentToEditIndex: number) => void;
};

const emojis = ["1f606", "1f642", "1f44d", "1f44f", "1f680"];

export const Comment: React.FC<Props> = ({ id, comment, addReaction }) => {
  const handleReaction = (reaction: string) => {
    addReaction(reaction, id);
  };
  return (
    <div className="comment">
      <p>{comment.text}</p>
      <div className="pb-2">
        {comment.reactions.map((reaction) => (
          <Emoji key={reaction} unified={reaction} size={24} />
        ))}
      </div>
      <Popup
        trigger={
          <button>
            <FaFaceSmile size={24} color="#d3d3d34f" className="commentIcon" />
          </button>
        }
        position="right top"
        className="draftComment"
      >
        {emojis.map((emoji) => (
          <button onMouseDown={() => handleReaction(emoji)}>
            <Emoji key={emoji} unified={emoji} size={24} />
          </button>
        ))}
      </Popup>
    </div>
  );
};
