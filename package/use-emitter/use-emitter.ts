import { useCallback } from "react";
import { useGameContext } from "../use-game-context";

export const useEmitter = <T extends string = string>(topic: T) => {
  const game = useGameContext();

  return useCallback(
    (data: unknown) => {
      game?.events.emit(topic, data);
    },
    [game, topic],
  );
};
