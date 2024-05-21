import React from "react";

import "./styles.css";
import { Comment as TComment } from "../../types";

type Props = {
  comment: TComment;
};


export const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <div className="comment">
      <p>{comment.text}</p>
    </div>
  );
};
