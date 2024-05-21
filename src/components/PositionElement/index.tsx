import React, { PropsWithChildren } from "react";
import { Position } from "../../types";

type Props = PropsWithChildren<{
  position: Position;
}>;

export const PositionElement: React.FC<Props> = ({ position, children }) => {
  const styles = {
    position: "absolute",
    top: `${position.y}px`,
    left: `${position.x}px`,
  } as React.CSSProperties;
  return <div style={styles}>{children}</div>;
};
