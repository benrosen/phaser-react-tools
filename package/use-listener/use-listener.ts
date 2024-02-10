import { useEffect } from "react";
import { useGameContext } from "../use-game-context";

export const useListener = <T extends string = string>(
  topic: T,
  listener: (data: unknown) => void,
) => {
  const game = useGameContext();

  useEffect(() => {
    game?.events.on(topic, listener);

    return () => {
      game?.events.off(topic, listener);
    };
  }, [game, listener, topic]);
};
