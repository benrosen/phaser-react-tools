import { useContext, useEffect } from 'react'

import GameContext from '../contexts/GameContext'

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
