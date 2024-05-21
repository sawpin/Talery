import Popup from "reactjs-popup";

import type { Thread as TThread } from "../../types";
import { CommentInput } from "../CommentInput";
import { useState } from "react";
import { PositionElement } from "../PositionElement";
import { FaComment } from "react-icons/fa6";
import { Comment } from "../Comment";

type Props = {
  id: string;
  thread: TThread;
};

export const Thread: React.FC<Props> = ({ id, thread }) => {
  const [draftComment, setDraftComment] = useState<string>("");
  const handleSaveComment = () => {};
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
        {thread.comments.map((comment) => (
          <Comment key={comment.text} comment={comment} />
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
