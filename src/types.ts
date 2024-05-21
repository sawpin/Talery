
export type Comment = {
  text: string;
  reactions: string[];
};

export type Position = {
  x: number;
  y: number;
};

export type Thread = {
  position: Position;
  comments: Comment[];
};

export type CommentThreads = {
  [key: string]: Thread
}
