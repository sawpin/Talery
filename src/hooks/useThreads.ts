import { v4 as uuid } from "uuid";
import { useState } from "react";
import type { Thread, Threads, Position, Comment } from "../types";

export type NewThread = {
  position: Position;
  comment: Comment;
};

export type NewComment = {
  comment: Comment;
  threadId: string;
};

export type AddReaction = {
  commentToEditIndex: number;
  reaction: string;
  threadId: string;
};

export const useThreads = () => {
  const [threads, setThreads] = useState<Threads>({});

  const addComment = ({ threadId, comment }: NewComment) => {
    setThreads((prevThread) => {
      const threadToEdit = prevThread[threadId];
      return {
        ...prevThread,
        [threadId]: {
          ...threadToEdit,
          comments: threadToEdit.comments.concat(comment),
        },
      };
    });
  };

  const addReaction = ({ threadId, commentToEditIndex, reaction }: AddReaction) => {
    setThreads((prevThread) => {
      const threadToEdit = prevThread[threadId];
      const newComments = threadToEdit.comments.slice();
      const commentToEdit = newComments[commentToEditIndex];
      commentToEdit.reactions = commentToEdit.reactions.concat(reaction);
      newComments[commentToEditIndex] = commentToEdit;
      return {
        ...prevThread,
        [threadId]: {
          ...threadToEdit,
          comments: newComments,
        },
      };
    });
  };

  const startNewThread = (newThread: NewThread) => {
    const { position, comment } = newThread;
    setThreads((prevThreads) => {
      const id = uuid();
      const newThread: Thread = {
        position,
        comments: [comment],
      };
      return {
        ...prevThreads,
        [id]: newThread,
      };
    });
  };

  return {
    threads,
    startNewThread,
    addComment,
    addReaction,
  };
};
