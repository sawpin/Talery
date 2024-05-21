import Popup from "reactjs-popup";

import { CommentInput } from "../CommentInput";
import { Comment, Position } from "../../types";
import { PositionElement } from "..";
import { FaComment } from "react-icons/fa6";

type Props = {
  position: Position;
  draftComment: string;
  setDraftComment: (newComment: string) => void;
  startThread: (comment: Comment) => void;
};

export const DraftThread: React.FC<Props> = ({
  position,
  draftComment,
  setDraftComment,
  startThread,
}) => {
  const handleSaveComment = () => {
    startThread({ text: draftComment, reactions: [] });
  };
  return (
    <PositionElement position={position}>
      <Popup
        open={true}
        trigger={
          <button>
            <FaComment size={32} color="#ffffff" className="commentIcon" />
          </button>
        }
        position="right top"
        className="draftComment"
      >
        <CommentInput
          value={draftComment}
          onChange={(event) => setDraftComment(event.target.value)}
          saveComment={handleSaveComment}
        />
      </Popup>
    </PositionElement>
  );
};
