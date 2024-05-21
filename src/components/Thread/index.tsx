import Popup from "reactjs-popup";

import type { Thread as TThread } from "../../types";
import { CommentInput } from "../CommentInput";
import { useState } from "react";
import { PositionElement } from "../PositionElement";
import { FaComment } from "react-icons/fa6";
import { Comment } from "../Comment";
import type { AddReaction, NewComment } from "../../hooks";

type Props = {
  id: string;
  thread: TThread;
  addComment: (newComment: NewComment) => void;
  addReaction: (addReactArgs: AddReaction) => void;
};

export const Thread: React.FC<Props> = ({
  id,
  thread,
  addComment,
  addReaction,
}) => {
  console.log(thread)
  const [draftComment, setDraftComment] = useState<string>("");
  const handleSaveComment = () => {
    addComment({
      comment: { text: draftComment, reactions: [] },
      threadId: id,
    });
    setDraftComment("");
  };

  const handleAddReaction = (reaction: string, commentToEditIndex: number) => {
    addReaction({
      threadId: id,
      reaction,
      commentToEditIndex,
    });
  };

  const { position } = thread;
  return (
    <PositionElement position={position}>
      <Popup
        trigger={
          <button>
            <FaComment size={32} color="#ffffff" className="commentIcon" />
          </button>
        }
        position="right top"
      >
        {thread.comments.map((comment, index) => (
          <Comment
            id={index}
            key={comment.text}
            comment={comment}
            addReaction={handleAddReaction}
          />
        ))}
        <CommentInput
          value={draftComment}
          onChange={(event) => setDraftComment(event.target.value)}
          saveComment={handleSaveComment}
        />
      </Popup>
    </PositionElement>
  );
};
