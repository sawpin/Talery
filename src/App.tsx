import { useState } from "react";

import "./App.css";
import { DraftThread, Thread } from "./components";
import { Position } from "./types";
import { useThreads } from "./hooks";

type TDraftThread = {
  position: Position;
  comment: string;
};

function App() {
  const [draftThread, setDraftThread] = useState<TDraftThread | undefined>(
    undefined
  );
  const { threads, startNewThread, addComment, addReaction } = useThreads();
  const setDraftComment = (newComment: string) => {
    setDraftThread((prevState) => {
      if (prevState && prevState.position) {
        return {
          ...prevState,
          comment: newComment,
        };
      }
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const position = {
      x: event.clientX,
      y: event.clientY,
    };

    setDraftThread({
      position,
      comment: "",
    });
  };

  const handleStartNewThread = () => {
    if (draftThread?.comment && draftThread.position) {
      startNewThread({
        position: draftThread?.position,
        comment: {
          text: draftThread?.comment,
          reactions: [],
        },
      });
      setDraftThread(undefined);
    }
  };

  return (
    <div className="App" onClick={handleClick}>
      {draftThread && (
        <DraftThread
          key={draftThread.position.x + draftThread.position.y}
          position={draftThread.position}
          draftComment={draftThread.comment}
          setDraftComment={setDraftComment}
          startThread={handleStartNewThread}
        />
      )}
      {Object.keys(threads).map((key) => (
        <Thread
          key={key}
          id={key}
          thread={threads[key]}
          addComment={addComment}
          addReaction={addReaction}
        />
      ))}
    </div>
  );
}

export default App;
