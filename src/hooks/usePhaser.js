import { useEffect, useRef, useState } from 'react'

import Phaser from 'phaser'

/**
 * Returns a setup object containing a canvas ref and a reference to the Phaser game instance.
 *
 * @function
 * @module usePhaser
 * @param {Object} config The config object for the Phaser game instance.
 * @returns {PhaserSetup} An object containing a canvas ref and a reference to the Phaser game instance.
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

  /**
   * A setup object containing a canvas ref and a reference to the Phaser game instance.
   *
   * @typedef PhaserSetup
   * @type {Object}
   * @property {Object} canvasRef The reference to the Phaser game canvas.
   * @property {Object} game The Phaser game instance.
   * @see module:usePhaser
   * @see module:GameComponent
   */
  return [canvasRef, game]
}
