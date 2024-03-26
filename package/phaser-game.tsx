import { Game } from "phaser";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import GameConfig = Phaser.Types.Core.GameConfig;

const PhaserGameContext = React.createContext<Game | null>(null);

export const DEFAULT_CANVAS_STYLE: React.CSSProperties = {
  width: "100%",
  height: "auto",
};

export const DEFAULT_OVERLAY_STYLE: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
};

export const DEFAULT_CONTAINER_STYLE: React.CSSProperties = {
  position: "relative",
};

export const usePhaserGame = () => {
  const game = React.useContext(PhaserGameContext);

  if (!game) {
    throw new Error("usePhaserGame must be used within a PhaserGame component");
  }

  return game;
};

export const usePhaserGameEvent = (eventName: string) => {
  const game = usePhaserGame();

  const on = useCallback(
    (callback: Function) => {
      game.events.on(eventName, callback);
    },
    [game, eventName],
  );

  const off = useCallback(
    (callback: Function) => {
      game.events.off(eventName, callback);
    },
    [game, eventName],
  );

  const emit = useCallback(
    (...args: any[]) => {
      game.events.emit(eventName, ...args);
    },
    [game, eventName],
  );

  return { on, off, emit };
};

export const PhaserGame = ({
  canvasStyle = DEFAULT_CANVAS_STYLE,
  children,
  config,
  containerStyle = DEFAULT_CONTAINER_STYLE,
  overlayStyle = DEFAULT_OVERLAY_STYLE,
}: PropsWithChildren<{
  config?: GameConfig;
  canvasStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  overlayStyle?: React.CSSProperties;
}>) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const game = new Game({
      ...config,
      type: Phaser.CANVAS,
      canvas: canvasRef.current,
    });

    console.log("Game created");

    setGame(game);

    return () => {
      game.destroy(false);
      console.log("Game destroyed");
    };
  }, [canvasRef, config]);

  return (
    <PhaserGameContext.Provider value={game}>
      <div style={containerStyle}>
        <div style={overlayStyle}>{children}</div>
        <canvas ref={canvasRef} style={canvasStyle} />
      </div>
    </PhaserGameContext.Provider>
  );
};
