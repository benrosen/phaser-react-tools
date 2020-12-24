import { GameProvider } from '../contexts/GameContext'
import React from 'react'
import usePhaser from '../hooks/usePhaser'

export default function GameComponent({ children, config }) {
  const [canvasRef, game] = usePhaser(config)

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <GameProvider value={game}>{children}</GameProvider>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}
