import { useCallback, useContext } from 'react'

import { GameContext } from '../contexts/GameContext'

/**
 * Returns a function that can emit an event of the given type.
 *
 * @function
 * @module useEventEmitter
 * @param {string} type The type of event to emit.
 * @returns {emitFunction} A function that can emit an event of the given type.
 */
export default function useEventEmitter(type) {
  const game = useContext(GameContext)

  return useCallback(
    (detail) => {
      game.events.emit(type, detail)
    },
    [game]
  )
}

/**
 * Emit an event.
 *
 * @callback emitFunction
 * @param {Object} [detail] The event payload.
 */
