import { useState } from "react";

import "./App.css";
import { DraftThread } from "./components";
import { Position } from "./types";

type TDraftThread = {
  position: Position;
  comment: string;
};

function App() {
  const [draftThread, setDraftThread] = useState<TDraftThread | undefined>(
    undefined
  );
  const setDraftComment = (newComment: string) => {
    setDraftThread((prevState) => {
      if (prevState && prevState.position) {
        return{
          ...prevState,
          comment: newComment,
        };
      }
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const position = {
      x: event.clientX,
      y: event.clientY
    };

    setDraftThread({
      position,
      comment: ""
    });
  }

  const startNewThread = () => {}
  return (
    <div className="App" onClick={handleClick}>
      {draftThread && (
        <DraftThread
          key={draftThread.position.x+draftThread.position.y}
          position={draftThread.position}
          draftComment={draftThread.comment}
          setDraftComment={setDraftComment}
          startThread={startNewThread}
        />
      )}
    </div>
  );
}

export default App;
