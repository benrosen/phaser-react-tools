import { useEffect, useRef, useState } from 'react'

import Phaser from 'phaser'

/**
 * Use a Phaser game instance.
 * @param {Object} config The configuration object for your Phaser game.
 * @returns {PhaserGame} The canvas ref and the game instance.
 */
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

/**
 * @typedef {Object} PhaserGame
 * @property {Object} canvasRef The ref to attach to the game canvas.
 * @property {Object} game The Phaser game instance.
 */
