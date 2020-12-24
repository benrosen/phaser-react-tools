import { useCallback, useContext } from 'react'

import GameContext from '../contexts/GameContext'

export default function useEventEmitter(type) {
  const game = useContext(GameContext)

  const emit = useCallback(
    (detail) => {
      game.events.emit(type, detail)
    },
    [game]
  )

  return emit
}
