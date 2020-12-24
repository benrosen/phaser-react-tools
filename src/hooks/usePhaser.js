import { useEffect, useRef, useState } from 'react'

import Phaser from 'phaser'

export default function usePhaser(config) {
  const canvasRef = useRef()
  const [game, setGame] = useState()

  useEffect(() => {
    config.canvas = canvasRef.current
    config.callbacks = {
      postBoot: (bootedGame) => {
        setGame(() => bootedGame)
      }
    }
    config.type = Phaser.CANVAS

    const phaser = new Phaser.Game(config)

    return () => {
      phaser.destroy()
    }
  }, [config])

  return [canvasRef, game]
}
