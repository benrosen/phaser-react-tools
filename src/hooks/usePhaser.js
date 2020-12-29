import { useEffect, useRef, useState } from 'react'

import ConfigError from '../errors/ConfigError'
import Phaser from 'phaser'

/**
 * Returns a setup object containing a canvas ref and a reference to the Phaser game instance.
 *
 * @function
 * @module usePhaser
 * @param {Object} [config] The config object for the Phaser game instance.
 * @returns {InstanceConfig} A config object containing a canvas ref and a reference to the Phaser game instance.
 */
export default function usePhaser(config = {}) {
  const canvasRef = useRef()
  const [game, setGame] = useState()

  if (config.canvas) {
    throw new ConfigError(config, 'canvas')
  }

  if (config.type && config.type !== Phaser.CANVAS) {
    throw new ConfigError(config, 'type')
  }

  useEffect(() => {
    const modifiedConfig = config
    modifiedConfig.canvas = canvasRef.current
    modifiedConfig.type = Phaser.CANVAS
    if (config.callbacks.postBoot) {
      modifiedConfig.callbacks.postBoot = (bootedGame) => {
        config.callbacks.postBoot(bootedGame)
        setGame(() => bootedGame)
      }
    }

    const phaser = new Phaser.Game(modifiedConfig)

    return () => {
      phaser.destroy()
    }
  }, [config])

  return [canvasRef, game]
}

/**
 * A config object containing a canvas ref and a reference to the Phaser game instance.
 *
 * @typedef InstanceConfig
 * @type {Object}
 * @property {Object} canvasRef The reference to the Phaser game canvas.
 * @property {Object} game The Phaser game instance.
 * @see module:usePhaser
 * @see module:GameComponent
 */
