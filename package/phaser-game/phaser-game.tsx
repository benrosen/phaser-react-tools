import React, { Fragment, FunctionComponent, PropsWithChildren } from "react";
import { GameContextProvider } from "../game-context-provider";
import { usePhaser } from "../use-phaser";

export const PhaserGame: FunctionComponent<
  PropsWithChildren<Phaser.Types.Core.GameConfig>
> = ({ children, ...gameConfig }) => {
  const { canvasRef, game } = usePhaser(gameConfig);
  return (
    <Fragment>
      <GameContextProvider value={game}>{children}</GameContextProvider>
      <canvas ref={canvasRef} />
    </Fragment>
  );
};
