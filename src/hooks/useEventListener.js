import { useContext, useEffect } from 'react'

import { GameContext } from '../contexts/GameContext'

/**
 * Subscribe a callback function to events of the given type.
 *
 * @function
 * @module useEventListener
 * @param {string} type The type of event for which to listen.
 * @param {eventHandler} handler The event handler callback function.
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
 * Handle an event.
 *
 * @callback eventHandler
 * @param {*} [event] The event to be handled.
 * @see module:useEventListener
 */
