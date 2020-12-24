import { useCallback, useContext } from 'react'

import GameContext from '../contexts/GameContext'

/**
 * Use the Phaser game instance to emit events of the given type.
 * @param {string} type The type of event to be emitted.
 * @returns {(detail: *) => void} The function that emits the event.
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
