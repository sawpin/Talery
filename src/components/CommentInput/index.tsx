import type { ChangeEvent, KeyboardEvent } from "react";

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  saveComment: () => void;
};

export const CommentInput: React.FC<Props> = ({
  value,
  onChange,
  saveComment,
}) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      saveComment();
    }
  };
  return (
    <input
      type="textarea"
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
    />
  );
};
