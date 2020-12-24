import { useContext, useEffect } from 'react'

import GameContext from '../contexts/GameContext'

/**
 * Use the Phaser game instance to listen for events of the given type.
 * @param {string} type The type of event to listen for.
 * @param {eventHandler} handler The event handler callback.
 */
export default function useEventListener(type, handler) {
  const game = useContext(GameContext)

  useEffect(() => {
    if (game === undefined) {
      return
    }
    game.events.on(type, handler)
    return () => {
      game.events.off(type, handler)
    }
  }, [game, handler, type])
}

/**
 * @callback eventHandler
 * @param {*} event The event to be handled.
 */
