import { createRef, RefObject, useState } from "react";

export const usePhaser = (
  gameConfig: Phaser.Types.Core.GameConfig,
): {
  canvasRef: RefObject<HTMLCanvasElement>;
  game: Phaser.Game | null;
} => {
  const canvasRef = createRef<HTMLCanvasElement>();

  const [game, setGame] = useState<Phaser.Game | null>(null);

  // TODO

  return {
    canvasRef,
    game,
  };
};
