import { v4 as uuid } from 'uuid';
import { useState } from "react";
import type { Thread, Threads, Position, Comment } from "../types";

export type NewThread = {
  position: Position;
  comment: Comment;
};

export const useThreads = () => {
  const [threads, setThreads] = useState<Threads>({});

  const startNewThread = (newThread: NewThread) => {
    const { position, comment } = newThread;
    setThreads((prevThreads) => {
      const id = uuid();
      const newThread: Thread = {
        position,
        comments: [comment],
      }
      return {
        ...prevThreads,
        [id]: newThread,
      }
    })
  };

  return {
    threads,
    startNewThread,
  };
};
